package com.minhluan.backend.service;




import com.minhluan.backend.entity.CartItem;
import java.util.List;
import java.util.Optional;


public interface CartItemService {
    public CartItem createCartItem(CartItem CartItem);
    public CartItem getCartItemById(Long CartItemId);
    public List<CartItem> getAllCartItems();
    public CartItem updateCartItem(CartItem CartItem);
    public CartItem deleteCartItem(Long CartItemId);
    public List<CartItem> getCartItemsByCartId(Long cartId);
    public List<CartItem> deleteAllCartItems(Long  cartId);
    Optional<CartItem> updateCartItem(Long cartId, Long productId, int newQuality); // Change return type

    void deleteCartItemByCartIdAndProductId(Long cartId, Long productId); // New method
}
