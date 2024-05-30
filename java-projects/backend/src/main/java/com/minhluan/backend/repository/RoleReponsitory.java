package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.Role;

public interface RoleReponsitory extends JpaRepository<Role,Long>{
    
}
