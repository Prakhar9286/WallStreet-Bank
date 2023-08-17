package com.welllsfargo.training.obs.model;


import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.util.Base64;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@NoArgsConstructor
//@Getter
//@Setter
@Table(name="customer")
@Entity
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custId;
	
	private @NonNull String fname;
	private @NonNull String lname;
	private String mname;
	private @NonNull String fathersName;
	private @NonNull String mobile;
	private String email;
	private String password;
	
	@Column(unique=true)
	private @NonNull String aadharNo;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private @NonNull Date dob;
	
	@Column(unique=true)
	private @NonNull String pan;
//	private Boolean hasATM;
	private @NonNull String title;
	private String mothersName;
	
	@OneToMany(mappedBy="customer", cascade= CascadeType.ALL)
	private List<Address> address;
	
	@OneToOne
	@JoinColumn(name="account")
	private Account account;

	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", fname=" + fname + ", lname=" + lname + ", mname=" + mname
				+ ", fathersName=" + fathersName + ", mobile=" + mobile + ", email=" + email + ", aadharNo=" + aadharNo
				+ ", dob=" + dob + ", pan=" + pan + ", title=" + title + ", mothersName=" + mothersName + ", address="
				+ address + ", account=" + account + "]";
	}

	public Long getCustId() {
		return custId;
	}

	public void setCustId(Long custId) {
		this.custId = custId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getFathersName() {
		return fathersName;
	}

	public void setFathersName(String fathersName) {
		this.fathersName = fathersName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		System.out.println("First :"+password);
		Base64.Encoder encoder = Base64.getEncoder();  // encrypt password in database field
        String normalString = password;
        System.out.println(password +" "+"normal :"+normalString);
        String encodedString = encoder.encodeToString(
        normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
	}

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMothersName() {
		return mothersName;
	}

	public void setMothersName(String mothersName) {
		this.mothersName = mothersName;
	}

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}
	
}

