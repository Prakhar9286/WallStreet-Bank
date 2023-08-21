package com.welllsfargo.training.obs.exception;

public class InsufficientFundsException extends Exception{
	private static final long serialVersionUID = 2L;
	
	public InsufficientFundsException(String message) {
		super(message);
	}
}
