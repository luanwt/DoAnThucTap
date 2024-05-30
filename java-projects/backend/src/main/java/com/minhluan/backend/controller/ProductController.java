package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.minhluan.backend.entity.Product;
import com.minhluan.backend.service.ProductService;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/products")

public class ProductController {
    private ProductService productService;
    // Create Product REST API

    @PostMapping

    public ResponseEntity<Product> createProduct(@RequestBody Product Product) {
        Product savedProduct = productService.createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);

    }
    // Get Product by id REST API

    // http://1ocalhost:8080/api/Products/1

    @GetMapping("{id}")

    public ResponseEntity<Product> getProductById(@PathVariable("id") Long ProductId) {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }

    
    // Get All Products REST API

    // http://1ocalhost:8080/api/Products

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
        @RequestParam(defaultValue = "0") Integer pageNo,
        @RequestParam(defaultValue = "10") Integer pageSize,
        @RequestParam(required = false) Long categoryId,
        @RequestParam(required = false) String name) {
    
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Product> products;
    
        if (categoryId != null) {
            products = productService.getProductsByCategoryId(categoryId, pageable);
        }  else if (name != null&& !name.isEmpty()) {
            products = productService.getProductsByName(name, pageable);
        }else {
            products = productService.getAllProducts(pageable);
        }
    
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", String.format("items %d-%d/%d",
                pageable.getOffset(),
                pageable.getOffset() + products.getContent().size(),
                products.getTotalElements()));
    
        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // Update Product REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Products/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long ProductId,
            @RequestBody Product Product) {
        Product.setId(ProductId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }
    // Delete Product REST API

    @DeleteMapping("{id}")

    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId) {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

    @GetMapping("/getlatest")
    public ResponseEntity<List<Product>> getProductsNew(
            @RequestParam(name = "categoryid", required = false) Long category,
            @RequestParam(name = "pagesize", required = false, defaultValue = "8") int pagesize) {
        List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
        return ResponseEntity.ok(products);
    }

  

}