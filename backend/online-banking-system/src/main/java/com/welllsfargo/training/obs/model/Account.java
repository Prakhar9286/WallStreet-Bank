package com.welllsfargo.training.obs.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="account")
public class Account {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long accountNo;
	private String accType;
	private String ifsc;
	private String micr;
	private Boolean hasATM;
	private Long transactionPassword;
	private int unsuccessfulAttemptsCounter;
	
	@JsonIgnore
	@OneToOne(mappedBy="account", cascade= CascadeType.ALL)
	private Customer customer;
	
	private Float balance;
	
	@OneToMany(mappedBy="account", cascade= CascadeType.ALL)
	private Set<Beneficiary> beneficiary;
}
