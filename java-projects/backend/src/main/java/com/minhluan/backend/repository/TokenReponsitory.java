package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.Token;

public interface TokenReponsitory extends JpaRepository<Token,Long>{
    
}
