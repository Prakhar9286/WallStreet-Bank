package com.welllsfargo.training.obs.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class AccountForm {

	
	private Customer customer;
	
	private Address residentialAddress;
	private Address permanentAddress;
	
//	private String occupationType;
//	private String sourceOfIncome;
//	private Long grossAnnualIncome;
	
	private Boolean hasATM;
	private String ifsc;
}
