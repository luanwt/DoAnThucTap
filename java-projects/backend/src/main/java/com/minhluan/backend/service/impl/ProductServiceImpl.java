
package com.minhluan.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.CartItem;
import com.minhluan.backend.entity.Product;
import com.minhluan.backend.repository.CartItemRepository;
import com.minhluan.backend.repository.ProductRepository;
import com.minhluan.backend.service.ProductService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable) {
        return productRepository.findProductsByCategoryId(categoryId, pageable);
    }
    @Override
   public Page<Product> getProductsByName(String name, Pageable pageable) {
  return productRepository.findProductsByNameContainingIgnoreCase(name.toLowerCase(), pageable);
}

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatestProductsInCategory(categoryId, pageRequest);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public List<Product> getProductsByCondition(String title, Long category) {
        if (title != null && category != null) {
            return productRepository.findByTitleAndCategoryId(title, category);
        } else if (title != null) {
            return productRepository.findByTitle(title);
        } else if (category != null) {
            return productRepository.findByCategoryId(category);
        } else {
            return new ArrayList<>();// Tra ve danh sach trong
        }
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setTitle(product.getTitle());
        existingProduct.setName(product.getName());
        existingProduct.setBrand(product.getBrand());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setSize(product.getSize());

        existingProduct.setCreated_at(product.getCreated_at());
        existingProduct.setUpdated_at(product.getUpdated_at());
        existingProduct.setDeleted(product.getDeleted());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setOrderdetail(product.getOrderdetail());

        Product updateProduct = productRepository.save(existingProduct);
        return updateProduct;
    }

    
    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }


     @Override
    public Optional<Product> updateProduct(Long  id, int newQuality) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setQuality(newQuality);
            // Save the updated product
            return Optional.of(productRepository.save(product));
          } else {
            return Optional.empty(); // Return empty optional if the product doesn't exist
          }
    }


}
