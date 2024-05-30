package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.minhluan.backend.entity.Category;
import com.minhluan.backend.service.CategoryService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class CategoryController {
   private CategoryService categoryService;
   @PostMapping
   public ResponseEntity<Category> createCategory (@RequestBody Category category){
    Category saveCategory=categoryService.createtCategory(category);
    return new ResponseEntity<>(saveCategory, HttpStatus.CREATED);
   }

   @GetMapping("{id}")
   public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId) {
        Category Category =categoryService.getCategoryById(categoryId);
       return new ResponseEntity<>(Category, HttpStatus.OK);
   }
   

   @GetMapping
   public ResponseEntity<List<Category>> getAllCategorys() {
        List<Category> Categories =categoryService.getAllCategories();
        HttpHeaders headers= new HttpHeaders();
        headers.add("Content-Range","items 0-"+Categories.size()+"/" +Categories.size());
       return ResponseEntity.ok().headers(headers).body(Categories);
   }

   @PutMapping("{id}")
   public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId,@RequestBody Category Category){
    Category.setId(categoryId);
    Category updatedCategory=categoryService.updateCategory(Category);
    return new ResponseEntity<>(updatedCategory,HttpStatus.OK); 
   }

   @DeleteMapping("{id}")
   public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId){
    categoryService.deleteCategory(categoryId);
    return new ResponseEntity<>("Category successfully deleted!!!",HttpStatus.OK);
   }
}
