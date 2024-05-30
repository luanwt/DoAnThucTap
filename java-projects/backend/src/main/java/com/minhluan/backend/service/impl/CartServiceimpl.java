
package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.Cart;
import com.minhluan.backend.repository.CartRepository;
import com.minhluan.backend.service.CartService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class CartServiceimpl implements CartService {
    private CartRepository CartRepository;



    @Override
    public Cart createCart(Cart Cart) {
        return CartRepository.save(Cart);
    }

    @Override
    public List<Cart> getCartsByUserId(Long userId) {
        return CartRepository.findByUserId(userId);
    }

    @Override
    public Cart getCartById(Long CartId){
        Optional<Cart> optionalCart = CartRepository.findById(CartId);
        return optionalCart.get();
    }

     @Override
    public List<Cart> getAllCarts() {
        return CartRepository.findAll();
    }

    @Override
    public Cart updateCart(Cart Cart){
        Cart existingCart = CartRepository.findById(Cart.getId()).get();
        existingCart.setUser(Cart.getUser());
        Cart updateCart = CartRepository.save(existingCart);
        return updateCart;
    }

    @Override
    public Cart deleteCart(Long CartId) {
        CartRepository.deleteById(CartId);
        return null;
    }
}
