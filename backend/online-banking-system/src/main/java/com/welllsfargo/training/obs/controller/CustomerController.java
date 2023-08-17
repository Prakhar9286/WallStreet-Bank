package com.welllsfargo.training.obs.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.welllsfargo.training.obs.exception.ResourceNotFoundException;
import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.AccountForm;
import com.welllsfargo.training.obs.model.Address;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.service.AccountService;
import com.welllsfargo.training.obs.service.CustomerService;

@RestController
@RequestMapping(value="/api")
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;
	
	@Autowired
	private AccountService aservice;
	
	@PostMapping("/register")
	public ResponseEntity<String> createCustomer(@Validated @RequestBody AccountForm accountForm) {
		Address residentialAddress = accountForm.getResidentialAddress();
		Address permanentAddress = accountForm.getPermanentAddress();
		Customer customer = accountForm.getCustomer();
		Account account = new Account();
		residentialAddress.setCustomer(customer);
		permanentAddress.setCustomer(customer);
		List<Address> address = Arrays.asList(residentialAddress,permanentAddress);		
		customer.setAddress(address);
		 
		account.setBalance(0);
		account.setHasATM(accountForm.getHasATM());
		account.setIfsc(accountForm.getIfsc());
		account.setAccType("Savings");
		
		customer.setAccount(account);
		account.setCustomer(customer);
		Account registeredAccount = aservice.registerAccount(account);
//		Customer registeredCustomer = cservice.registerCustomer(customer);
		if(registeredAccount != null) {
			String accountNo = registeredAccount.getAccountNo().toString();
			return ResponseEntity.ok(accountNo);
		}
		else {
			return ResponseEntity.badRequest().body("Registration failed");
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
	public Boolean loginCustomer(@Validated @RequestBody Customer customer) throws ResourceNotFoundException {
		Boolean a = false;
		String email = customer.getEmail();
		String password = customer.getPassword();
		Customer c = cservice.loginCustomer(email).orElseThrow(() -> 
		new ResourceNotFoundException("Customer not found "));
		
		if(email.equals(c.getEmail()) && password.equals(c.getPassword())) {
			a = true;
		}
		return a;
	}
	
	public ResponseEntity<String> forgetCustomerId(@Validated @RequestBody Long accountNo) throws ResourceNotFoundException {
		Account account = aservice.findByAccountNo(accountNo).orElseThrow(() -> 
		new ResourceNotFoundException("Invalid Account No."));
		Customer customer = cservice.getCustomer(account).orElseThrow(()->
		new ResourceNotFoundException("Customer details not found"));
		Long customerId = customer.getCustId();
		return ResponseEntity.ok(customerId.toString());
	}
}
