package com.welllsfargo.training.obs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.welllsfargo.training.obs.exception.ResourceNotFoundException;
import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.AccountForm;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.model.RegisterForm;
import com.welllsfargo.training.obs.service.AccountService;
import com.welllsfargo.training.obs.service.CustomerService;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	
	@Autowired
	private CustomerService cservice;
	
	@Autowired
	private AccountService aservice;
	
	
	@PostMapping("/{custId}/openAccount")
	public ResponseEntity<String> createCustomer(@PathVariable Long custId, @Validated @RequestBody AccountForm accountForm) {
		Boolean isAccountPresent = aservice.isAccountCreated(custId);
		if(isAccountPresent)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account already created !");
		String accountId = cservice.openAccount(custId, accountForm);
		try {
			Long.parseLong(accountId);
			return ResponseEntity.ok(accountId);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error during account creation");
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> registerCustomer(@Validated @RequestBody RegisterForm registerForm) {
		String email = registerForm.getEmail();
		String password = registerForm.getPassword();
		Customer customer = new Customer();
		customer.setEmail(email);
		customer.setPassword(password);
		Customer registeredCustomer = cservice.registerCustomer(customer);
		if(registeredCustomer != null) {
			return ResponseEntity.ok(registeredCustomer.getCustId().toString());
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error during registration");
		}
		
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
	public Boolean loginCustomer(@Validated @RequestBody Customer customer) throws ResourceNotFoundException {
		Boolean a = false;
		Long custId = customer.getCustId();
		String password = customer.getPassword();
		Customer c = cservice.loginCustomer(custId).orElseThrow(() -> 
		new ResourceNotFoundException("Customer not found "));
		
		if(c != null && password.equals(c.getPassword())) {
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
