package com.welllsfargo.training.obs.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	
	public Customer registerCustomer(Customer c) {
		return crepo.save(c);
	}
	
	public Optional<Customer> loginCustomer(String email) {
		return crepo.findByEmail(email);
	}
	
	public Optional<Customer> getCustomer(Account account) {
		return crepo.findByAccount(account);
	}
}
