package com.welllsfargo.training.obs.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.welllsfargo.training.obs.model.Account;
import com.welllsfargo.training.obs.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long>{
	public Optional<Customer> findByEmail(String email);
	public Optional<Customer> findByAccount(Account account);
}
