package com.minhluan.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.Orders;
public interface OrdersRepository extends JpaRepository<Orders,Long> {
    
}
