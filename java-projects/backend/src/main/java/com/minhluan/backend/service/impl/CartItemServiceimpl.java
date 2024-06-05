
package com.minhluan.backend.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.CartItem;
import com.minhluan.backend.repository.CartItemRepository;

import com.minhluan.backend.service.CartItemService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class CartItemServiceimpl implements CartItemService {
    private CartItemRepository CartItemRepository;

    @Override
    public CartItem createCartItem(CartItem CartItem) {
        return CartItemRepository.save(CartItem);
    }

    @Override
    public List<CartItem> getCartItemsByCartId(Long cartId) {
        return CartItemRepository.findByCartId(cartId);
    }

    @Override
    public CartItem getCartItemById(Long CartItemId) {
        Optional<CartItem> optionalCartItem = CartItemRepository.findById(CartItemId);
        return optionalCartItem.get();
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return CartItemRepository.findAll();
    }

    @Override
    public CartItem updateCartItem(CartItem CartItem) {
        CartItem existingCartItem = CartItemRepository.findById(CartItem.getId()).get();
        existingCartItem.setCart(CartItem.getCart());
        existingCartItem.setProductId(CartItem.getProductId());
        existingCartItem.setQuality(CartItem.getQuality());
        existingCartItem.setName(CartItem.getName());
        existingCartItem.setImage(CartItem.getImage());
        existingCartItem.setPrice(CartItem.getPrice());
        CartItem updateCartItem = CartItemRepository.save(existingCartItem);
        return updateCartItem;
    }

    @Override
    public CartItem deleteCartItem(Long CartItemId) {
        CartItemRepository.deleteById(CartItemId);
        return null;
    }

    @Override
    public List<CartItem> deleteAllCartItems(Long cartId) {

        // 1. Find all cart items for the customer:
        List<CartItem> cartItemsToDelete = CartItemRepository.findByCartId(cartId);

        // 2. Check for empty cart (optional, but improves efficiency):
        if (cartItemsToDelete.isEmpty()) {
            return Collections.emptyList(); // Return empty list if no items found
        }

        // 3. Delete all cart items in one operation (optimized):
        CartItemRepository.deleteAllInBatch(cartItemsToDelete);

        // 4. Return an empty list to indicate successful deletion:
        return Collections.emptyList();

    }

    @Override
    public Optional<CartItem> updateCartItem(Long cartId, Long productId, int newQuality) {
        Optional<CartItem> existingCartItem = CartItemRepository.findByCartIdAndProductId(cartId, productId);

        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            // Update the cart item with new Quality
            cartItem.setQuality(newQuality);
            // Save the updated cart item
            return Optional.of(CartItemRepository.save(cartItem));
        } else {
            return Optional.empty(); // Return empty optional if the cart item doesn't exist
        }
    }


    @Override
    public void deleteCartItemByCartIdAndProductId(Long cartId, Long productId) {
        Optional<CartItem> cartItem = CartItemRepository.findByCartIdAndProductId(cartId, productId);
        cartItem.ifPresent(CartItemRepository::delete);
    }
}
