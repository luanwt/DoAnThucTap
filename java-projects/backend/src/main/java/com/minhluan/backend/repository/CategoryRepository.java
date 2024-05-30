package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category,Long>{
    
}
