package com.minhluan.backend.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.Orders;
import com.minhluan.backend.repository.OrdersRepository;
import com.minhluan.backend.service.OrdersService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class OrdersServiceimpl implements OrdersService  {
    private OrdersRepository OrdersRepository;

    @Override
    public Orders createOrders(Orders Orders) {
        return OrdersRepository.save(Orders);
    }

    @Override
    public Orders getOrdersById(Long OrdersId){
        Optional<Orders> optionalOrders = OrdersRepository.findById(OrdersId);
        return optionalOrders.get();
    }

     @Override
    public List<Orders> getAllOrderss() {
        return OrdersRepository.findAll();
    }
    @Override
    public Orders updateOrders(Orders Orders){
        Orders existingOrders = OrdersRepository.findById(Orders.getId()).get();
        existingOrders.setAddress(Orders.getAddress());
        existingOrders.setEmail(Orders.getEmail());
        existingOrders.setFullname(Orders.getFullname());
        existingOrders.setNote(Orders.getNote());
        existingOrders.setOrder_data(Orders.getOrder_data());
        existingOrders.setPhone_number(Orders.getPhone_number());
        existingOrders.setStatus(Orders.getStatus());
        existingOrders.setTotal_money(Orders.getTotal_money());
        existingOrders.setUser(Orders.getUser());
        Orders updateOrders = OrdersRepository.save(existingOrders);
        return updateOrders;
    }

    @Override
    public Orders deleteOrders(Long OrdersId) {
        OrdersRepository.deleteById(OrdersId);
        return null;
    }
}
