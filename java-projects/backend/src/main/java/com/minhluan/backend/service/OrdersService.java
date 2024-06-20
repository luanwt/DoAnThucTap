package com.minhluan.backend.service;

import com.minhluan.backend.entity.Orders;
import java.util.List;

public interface OrdersService {
    public Orders createOrders(Orders Orders);
    public Orders getOrdersById(Long OrdersId);
    public List<Orders> getAllOrderss();
    public Orders updateOrders(Orders Orders);
    public Orders deleteOrders(Long OrdersId);
    public List<Orders> getOrderssByuserId(Long userId);
  
}
