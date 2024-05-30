package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{
    
}
