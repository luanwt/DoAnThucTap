package com.minhluan.backend.service;

import com.minhluan.backend.entity.OrderDetail;
import java.util.List;

public interface OrderDetailService {
    public OrderDetail createOrderDetail(OrderDetail OrderDetail);
    public OrderDetail getOrderDetailById(Long OrderDetailId);
    public List<OrderDetail> getAllOrderDetails();
    public OrderDetail updateOrderDetail(OrderDetail OrderDetail);
    public OrderDetail deleteOrderDetail(Long OrderDetailId);
}
