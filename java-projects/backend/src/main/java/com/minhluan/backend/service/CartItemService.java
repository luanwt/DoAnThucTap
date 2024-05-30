package com.minhluan.backend.service;




import com.minhluan.backend.entity.CartItem;
import java.util.List;


public interface CartItemService {
    public CartItem createCartItem(CartItem CartItem);
    public CartItem getCartItemById(Long CartItemId);
    public List<CartItem> getAllCartItems();
    public CartItem updateCartItem(CartItem CartItem);
    public CartItem deleteCartItem(Long CartItemId);
    public List<CartItem> getCartItemsByCartId(Long cartId);
    public List<CartItem> deleteAllCartItems(Long  cartId);
}
