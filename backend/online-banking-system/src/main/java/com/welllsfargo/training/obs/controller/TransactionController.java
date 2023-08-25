package com.welllsfargo.training.obs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.welllsfargo.training.obs.exception.InsufficientFundsException;
import com.welllsfargo.training.obs.model.Transaction;
import com.welllsfargo.training.obs.service.TransactionService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/transaction")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {
	
	@Autowired
	private TransactionService tservice;
	
	@PostMapping("/fundTransfer")
	public ResponseEntity<Object> transferFunds(@RequestBody Transaction t) {
		try {
			tservice.executeTransaction(t);
			return ResponseEntity.ok(t);
		}
		catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found");
		}
		catch(InsufficientFundsException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient funds");
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
		}
	}
	
	@GetMapping("/{accountId}/getRecentTransactions")
	public ResponseEntity<List<Transaction>> getRecentTransactions(@PathVariable Long accountId) {
		try {
			List<Transaction> transactions = tservice.getLast10Transactions(accountId);
			return ResponseEntity.ok(transactions);
		}
		catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
