package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;


import com.minhluan.backend.entity.CartItem;

import com.minhluan.backend.service.CartItemService;


import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/cartItems")
public class CartItemController {
    private CartItemService CartItemService;
    // Create CartItem REST API

    @PostMapping

    public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem CartItem) {
        CartItem savedCartItem = CartItemService.createCartItem(CartItem);
        return new ResponseEntity<>(savedCartItem, HttpStatus.CREATED);

    }
    // Get CartItem by id REST API

    // http://localhost:8080/api/CartItems/1

    @GetMapping("{id}")

    public ResponseEntity<CartItem> getCartItemById(@PathVariable("id") Long CartItemId) {
        CartItem CartItem = CartItemService.getCartItemById(CartItemId);
        return new ResponseEntity<>(CartItem, HttpStatus.OK);
    }
    // Get All CartItems REST API

    // http://1ocalhost:8080/api/CartItems

    @GetMapping

    public ResponseEntity<List<CartItem>> getAllCartItems() {

        List<CartItem> users = CartItemService.getAllCartItems();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + users.size() + "/" + users.size());
        return ResponseEntity.ok().headers(headers).body(users);

    }

    // Update CartItem REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/CartItems/1
    public ResponseEntity<CartItem> updateCartItem(@PathVariable("id") Long CartItemId,
            @RequestBody CartItem CartItem) {
        CartItem.setId(CartItemId);
        CartItem updatedCartItem = CartItemService.updateCartItem(CartItem);
        return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
    }
    // Delete CartItem REST API

    @DeleteMapping("{id}")

    public ResponseEntity<String> deleteCartItem(@PathVariable("id") Long CartItemId) {
        CartItemService.deleteCartItem(CartItemId);
        return new ResponseEntity<>("CartItem successfully deleted!", HttpStatus.OK);
    }
    @DeleteMapping("/cart/{cartId}")
    public ResponseEntity<String> deleteAllCartItems(@PathVariable("cartId") Long cartId) {
    
        // Delegate deletion logic to CartItemService (assuming it exists)
        CartItemService.deleteAllCartItems(cartId);
    
        // Return successful deletion message
        return new ResponseEntity<>("Cart items for cart ID " + cartId + " deleted successfully!", HttpStatus.OK);
    }

    @GetMapping("/cart/{cartId}")
    public ResponseEntity<List<CartItem>> getCartItemsByCartId(@PathVariable("cartId") Long cartId) {
        List<CartItem> cartItems = CartItemService.getCartItemsByCartId(cartId);  // Assuming findByCart exists
        if (cartItems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Handle empty cart list
        }
        // ... rest of your logic to prepare response (e.g., headers)
        return ResponseEntity.ok().body(cartItems);
    }
}
