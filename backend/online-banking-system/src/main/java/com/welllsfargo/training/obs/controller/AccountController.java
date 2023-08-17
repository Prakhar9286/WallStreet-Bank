package com.welllsfargo.training.obs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.service.AccountService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping(value="/account")
public class AccountController {
	
	@Autowired
	private AccountService aservice;
	
	@PostMapping("/changeTransactionPassword")
	public ResponseEntity<String> changeTransactionPassword(@Validated @RequestBody Account account) {
		Long accountNo = account.getAccountNo();
		Long password = account.getTransactionPassword();
		try {
			aservice.changePassword(accountNo, password);
			return ResponseEntity.ok("Password changed successfully");
		} catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found");
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing password");
		}
	}
	
//	public ResponseEntity<String> forgetCustomerId(@Validated @RequestBody Account account) {
//		Long accountNo = account.getAccountNo();
//		try {
//			aservice.changePassword(accountNo, password);
//			return ResponseEntity.ok("Password changed successfully");
//		} catch(EntityNotFoundException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found");
//		} catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing password");
//		}
//	}

}
