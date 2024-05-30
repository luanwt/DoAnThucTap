package com.minhluan.backend.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.OrderDetail;
import com.minhluan.backend.repository.OrderDetailRepository;
import com.minhluan.backend.service.OrderDetailService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class OrderDetailServiceimpl implements OrderDetailService  {
    private OrderDetailRepository OrderDetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetail orderDetail) {
        return OrderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderDetailId){
        Optional<OrderDetail> optionalOrderDetail = OrderDetailRepository.findById(orderDetailId);
        return optionalOrderDetail.get();
    }

     @Override
    public List<OrderDetail> getAllOrderDetails() {
        return OrderDetailRepository.findAll();
    }
    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderDetail){
        OrderDetail existingOrderDetail = OrderDetailRepository.findById(orderDetail.getId()).get();
        existingOrderDetail.setPrice(orderDetail.getPrice());
        existingOrderDetail.setNum(orderDetail.getNum());
        existingOrderDetail.setOrder(orderDetail.getOrder());
        existingOrderDetail.setTotal_money(orderDetail.getTotal_money());
        existingOrderDetail.setProduct(orderDetail.getProduct());
        OrderDetail updateOrderDetail = OrderDetailRepository.save(existingOrderDetail);
        return updateOrderDetail;
    }

    @Override
    public OrderDetail deleteOrderDetail(Long orderDetailId) {
        OrderDetailRepository.deleteById(orderDetailId);
        return null;
    }
}
