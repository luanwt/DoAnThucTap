package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.FeedBack;

public interface FeedbackRepository extends JpaRepository<FeedBack,Long>{
    
}
