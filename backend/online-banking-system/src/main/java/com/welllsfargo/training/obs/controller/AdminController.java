package com.welllsfargo.training.obs.controller;

import java.util.Collections;
import java.util.List;

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
import com.welllsfargo.training.obs.model.Admin;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.model.Transaction;
import com.welllsfargo.training.obs.model.UserSearchForm;
import com.welllsfargo.training.obs.service.AdminService;
import com.welllsfargo.training.obs.service.TransactionService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping(value="/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController 
{
	@Autowired
	private AdminService adservice;
	
	@Autowired
	private TransactionService tservice1;
	
	@PostMapping("/usersearch")
	public ResponseEntity<List<Customer>>useSearch(@RequestBody UserSearchForm u)
	{
		try {
			List<Customer> l1= adservice.userSearchByAdmin(u.getFname());
			return ResponseEntity.ok(l1);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		
	}
    

	@PostMapping("/accremoval/{accNo}")
	public void deletionOfAccount(@PathVariable Long accNo)
	{
		adservice.removeAcc(accNo);
	}
	
	@GetMapping("/latestTransactions/{accountId}")
	public ResponseEntity<List<Transaction>> LatestTransactions(@PathVariable Long accountId) {
		try {
			List<Transaction> transactions = tservice1.getLast10Transactions(accountId);
			return ResponseEntity.ok(transactions);
		}
		catch(EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
    @PostMapping("/login")
	public Boolean loginCustomer(@Validated @RequestBody Admin admin) throws ResourceNotFoundException {
		Boolean a = false;
		Long adminId = admin.getAdminId();
		String password = admin.getPassword();
		Admin ad = adservice.loginAdmin(adminId).orElseThrow(() -> 
		new ResourceNotFoundException("Admin not found "));
		
		if(ad != null && password.equals(ad.getPassword())) {
			a = true;
		}
		return a;
	} 
	
}
