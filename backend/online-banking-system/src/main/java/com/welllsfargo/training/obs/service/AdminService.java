package com.welllsfargo.training.obs.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welllsfargo.training.obs.model.Admin;
import com.welllsfargo.training.obs.model.Customer;
import com.welllsfargo.training.obs.repository.AccountRepository;
import com.welllsfargo.training.obs.repository.AdminRepository;
import com.welllsfargo.training.obs.repository.CustomerRepository;

@Service
public class AdminService 
{
	@Autowired
	private CustomerRepository crepo;

    @Autowired
	private AccountRepository arepo;

    @Autowired
    private AdminRepository adrepo;
	public List<Customer> userSearchByAdmin(String fname)
	{
		
		List<Customer> l= crepo.findByFname(fname);
		
		return l;
	}
	public void removeAcc(Long accNo)
	{
		arepo.deleteById(accNo);
	}

    public Optional<Admin> loginAdmin(Long adminId) {
		return adrepo.findById(adminId);
	}
}
