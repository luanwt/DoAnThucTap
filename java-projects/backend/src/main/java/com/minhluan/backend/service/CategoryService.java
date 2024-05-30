package com.minhluan.backend.service;
import com.minhluan.backend.entity.Category;
import java.util.List;

public interface CategoryService {
    public Category createtCategory(Category category);
    public Category getCategoryById(Long categoryId);
    public List<Category> getAllCategories();
    public Category updateCategory(Category category);
    public Category deleteCategory(Long categoryId);
}
