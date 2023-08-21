package com.welllsfargo.training.obs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.welllsfargo.training.obs.exception.InsufficientFundsException;
import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.Transaction;
import com.welllsfargo.training.obs.repository.AccountRepository;
import com.welllsfargo.training.obs.repository.TransactionRepository;

import jakarta.persistence.EntityNotFoundException;


@Service
public class TransactionService {
	
	@Autowired
	private TransactionRepository trepo;
	
	@Autowired
	private AccountRepository arepo;
	
	@Transactional
	public void executeTransaction(Transaction t) throws InsufficientFundsException {
		Account sourceAcc = arepo.findById(t.getFromAc()).
				orElseThrow(() -> new EntityNotFoundException("Source not found exception"));
		Account destAcc = arepo.findById(t.getToAc()).
				orElseThrow(() -> new EntityNotFoundException("Destination notfound exception"));
		if(sourceAcc.getBalance().compareTo(t.getAmount()) < 0) {
			throw new InsufficientFundsException("Insufficient balance !");
		}
		Float amount = t.getAmount();
		sourceAcc.setBalance(sourceAcc.getBalance()- amount);
		destAcc.setBalance(destAcc.getBalance() + amount);
		
		arepo.save(sourceAcc);
		arepo.save(destAcc);
		
		trepo.save(t);
	}
	
	public List<Transaction> getLast10Transactions(Long accountId) {
		Pageable pageable = PageRequest.of(0, 10,Sort.by("date").descending());
		List<Transaction> transactions = trepo.findLast10TransactionsByAccount(accountId, pageable);
		return transactions;
	}
}
