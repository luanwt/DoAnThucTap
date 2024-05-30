package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.Gallery;
import com.minhluan.backend.repository.GalleryRepository;
import com.minhluan.backend.service.GalleryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class GalleryServiceImpl implements GalleryService {
    private GalleryRepository GalleryRepository;

    @Override
    public Gallery createGallery(Gallery Gallery) {
        return GalleryRepository.save(Gallery);
    }

    @Override
    public Gallery getGalleryById(Long GalleryId){
        Optional<Gallery> optionalGallery = GalleryRepository.findById(GalleryId);
        return optionalGallery.get();
    }

     @Override
    public List<Gallery> getAllGallerys() {
        return GalleryRepository.findAll();
    }
@Override
      public Gallery updateGallery(Gallery Gallery){
        Gallery existingGallery = GalleryRepository.findById(Gallery.getId()).get();

        existingGallery.setThumbnail(Gallery.getThumbnail());
        existingGallery.setProduct(Gallery.getProduct());
        Gallery updateGallery = GalleryRepository.save(existingGallery);
        return updateGallery;
    }

    @Override
    public Gallery deleteGallery(Long GalleryId) {
        GalleryRepository.deleteById(GalleryId);
        return null;
    }

}
