package com.welllsfargo.training.obs.model;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountStatementForm {
    private Long customerId;
    private Date startDate;
    private Date endDate;
}
