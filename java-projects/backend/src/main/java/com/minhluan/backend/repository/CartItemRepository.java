package com.minhluan.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.minhluan.backend.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem,Long>{

          List<CartItem> findByCartId(Long cartId);  
}
