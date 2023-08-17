package com.welllsfargo.training.obs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.welllsfargo.training.obs.model.Account;

public interface AccountRepository extends JpaRepository<Account,Long>{
	
}
