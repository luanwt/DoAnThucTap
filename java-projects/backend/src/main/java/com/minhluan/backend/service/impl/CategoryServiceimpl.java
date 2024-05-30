package com.minhluan.backend.service.impl;

import java.util.List;
import com.minhluan.backend.entity.Category;
import com.minhluan.backend.service.CategoryService;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import java.util.Optional;
import com.minhluan.backend.repository.CategoryRepository;
@Service
@AllArgsConstructor
public class CategoryServiceimpl implements CategoryService{

    private CategoryRepository categoryRepository;

    @Override
    public Category createtCategory(Category category) {
       return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId) {
     Optional<Category> optionalCategory=categoryRepository.findById(categoryId);
     return optionalCategory.get();
    }

    @Override
    public List<Category> getAllCategories() {
       return categoryRepository.findAll();
    }

 @Override
public Category updateCategory(Category category) {
    Category existingCategory = categoryRepository.findById(category.getId()).get();
    existingCategory.setName(category.getName());
    existingCategory.setIsHome(category.getIsHome());
    existingCategory.setParentId(category.getParentId());
    Category updatedCategory = categoryRepository.save(existingCategory);
    return updatedCategory;
}

    @Override
    public Category deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
        return null;
    }
    
}
