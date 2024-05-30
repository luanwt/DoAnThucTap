package com.minhluan.backend.service;

import com.minhluan.backend.entity.Gallery;
import java.util.List;

public interface GalleryService {
    public Gallery createGallery(Gallery Gallery);
    public Gallery getGalleryById(Long GalleryId);
    public List<Gallery> getAllGallerys();
    public Gallery updateGallery(Gallery Gallery);
    public Gallery deleteGallery(Long GalleryId);
}
