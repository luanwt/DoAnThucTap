package com.minhluan.backend.service;


import com.minhluan.backend.entity.Cart;


import java.util.List;


public interface CartService {
    public Cart createCart(Cart Cart);
    public Cart getCartById(Long CartId);
    public List<Cart> getAllCarts();
    public Cart updateCart(Cart Cart);
    public Cart deleteCart(Long CartId);
    public List<Cart> getCartsByUserId(Long userId);
}
