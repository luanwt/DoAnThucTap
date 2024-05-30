package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.minhluan.backend.entity.Cart;

public interface CartRepository extends JpaRepository<Cart,Long>{
    List<Cart> findByUserId(Long userId);  
}
