package com.welllsfargo.training.obs.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.welllsfargo.training.obs.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
	
	@Query("SELECT t FROM Transaction t WHERE t.toAc = :accountId OR t.fromAc = :accountId ORDER BY t.date DESC")
	List<Transaction> findLast10TransactionsByAccount(@Param("accountId") Long accountId, Pageable pageable);
}
