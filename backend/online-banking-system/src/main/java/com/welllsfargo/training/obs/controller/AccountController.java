package com.welllsfargo.training.obs.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.welllsfargo.training.obs.exception.ResourceNotFoundException;
import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.service.AccountService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping(value="/account")
@CrossOrigin(origins = "http://localhost:3000")
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
	
	@PostMapping("/{accountId}/deposit")
	public ResponseEntity<String> depositMoney(@PathVariable Long accountId, @RequestBody Float amount) {
		try {
			aservice.depositMoney(accountId, amount);
			return ResponseEntity.ok("Deposit successful");
		}
		catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found");
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Someting went wrong!");
		}
	}

	@GetMapping("/{custId}/getBalance")
	public ResponseEntity<Float> getBalance(@PathVariable Long custId) throws ResourceNotFoundException {
		Float b = aservice.getBalance(custId);
		return ResponseEntity.ok(b);
	}

}
