package com.welllsfargo.training.obs.service;

import java.sql.Date;
import java.time.LocalDate;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.model.Transaction;
import com.welllsfargo.training.obs.repository.AccountRepository;
import com.welllsfargo.training.obs.repository.CustomerRepository;
import com.welllsfargo.training.obs.repository.TransactionRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AccountService {

	@Autowired
	private AccountRepository arepo;
	
	@Autowired
	private TransactionRepository trepo;
	
	@Autowired
	private CustomerRepository crepo;
	public Account registerAccount(Account a) {
		return arepo.save(a);
	}
	
	public void changePassword(Long accountId, Long newPassword) {
		Optional<Account> optionalAccount = arepo.findById(accountId);
		if(optionalAccount.isPresent()) {
			Account account = optionalAccount.get();
			account.setTransactionPassword(newPassword);
			arepo.save(account);
		}
		else {
			throw new EntityNotFoundException("Account not found");
		}
	}
	
	public Optional<Account> findByAccountNo(Long accountNo) {
		return arepo.findById(accountNo);
	}
	
	public Boolean isAccountCreated(Long custId) {
		Boolean isPresent = false;
		try {
			Customer c = crepo.getReferenceById(custId);
			if(c.getAccount() != null)
				isPresent = true;
		}
		catch(EntityNotFoundException e) {
			isPresent = false;
		}
		
		return isPresent;
	}
	
	public void depositMoney(Long accountNo, Float amount) {
		Account account = arepo.findById(accountNo).
				orElseThrow(() -> new EntityNotFoundException("Account not found"));
		account.setBalance(account.getBalance() + amount);
		arepo.save(account);
		
		Transaction t = new Transaction();
		t.setToAc(accountNo);
		t.setRemarks("DEPOSIT");
		t.setDate(new Date(System.currentTimeMillis()));
		t.setAmount(amount);
		t.setTransactionTypeId("DIRECT DEPOSIT");
		
		trepo.save(t);
	}
	
}
