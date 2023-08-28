package com.welllsfargo.training.obs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.welllsfargo.training.obs.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long>{
    
}
