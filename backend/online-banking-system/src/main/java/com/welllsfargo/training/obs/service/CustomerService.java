package com.welllsfargo.training.obs.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.AccountForm;
import com.welllsfargo.training.obs.model.Address;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.repository.AccountRepository;
import com.welllsfargo.training.obs.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	
	@Autowired
	private AccountRepository arepo;
	
	public Customer registerCustomer(Customer c) {
		return crepo.save(c);
	}
	
	public Optional<Customer> loginCustomer(Long custId) {
		return crepo.findById(custId);
	}
	
	public Optional<Customer> getCustomer(Account account) {
		return crepo.findByAccount(account);
	}

	public Optional<Customer> getCustomer(Long custId) {
		return crepo.findById(custId);
	}

	public Account getAccount(Long custId) {
		Optional<Customer> c = crepo.findById(custId);
		Customer cust = c.get();
		return cust.getAccount();
		
		

	}
	
	public String openAccount(Long custId, AccountForm accountForm) {
		System.out.println("====== HERE ========");
		Customer c = crepo.getReferenceById(custId);
		
		Customer customer = accountForm.getCustomer();
		c.setAadharNo(customer.getAadharNo());
		c.setDob(customer.getDob());
		c.setFathersName(customer.getFathersName());
		c.setFname(customer.getFname());
		c.setLname(customer.getLname());
		c.setMname(customer.getMname());
		c.setMobile(customer.getMobile());
		c.setMothersName(customer.getMothersName());
		c.setPan(customer.getPan());
		c.setTitle(customer.getTitle());
		
		Address residentialAddress = accountForm.getResidentialAddress();
		Address permanentAddress = accountForm.getPermanentAddress();
		Account account = new Account();
		residentialAddress.setCustomer(c);
		permanentAddress.setCustomer(c);
		List<Address> address = Arrays.asList(residentialAddress,permanentAddress);		
		c.setAddress(address);
		 Float amt = (float) 0;
		account.setBalance(amt);
		account.setHasATM(accountForm.getHasATM());
		account.setIfsc(accountForm.getIfsc());
		account.setAccType("Savings");
		
		c.setAccount(account);
		account.setCustomer(c);
		Account registeredAccount = arepo.save(account);
//		Account registeredAccount = aservice.registerAccount(account);
//		Customer registeredCustomer = cservice.registerCustomer(customer);
		
//		crepo.save(c);
		if(registeredAccount != null)
			return registeredAccount.getAccountNo().toString();
		else 
			return "Error opening Account";
	}
}
