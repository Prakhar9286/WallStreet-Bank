package com.welllsfargo.training.obs.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.repository.AccountRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AccountService {

	@Autowired
	private AccountRepository arepo;
	
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
	
}
