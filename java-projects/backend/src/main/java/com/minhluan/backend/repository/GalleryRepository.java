package com.minhluan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhluan.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long>{
    
}
