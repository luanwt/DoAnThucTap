package com.minhluan.backend.entity;

import java.util.Date;
import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String title;
    private int price;
   
    private int discount;
    private String brand;
    private int quality;
    private String image;
    private String size;
    private String description;
    private Date created_at;
    private Date updated_at;
    private int deleted;

    @ManyToOne
    private Category category;
    
    // @OneToMany(mappedBy = "product")
    // private List<OrderDetail> orderdetail;

    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.REMOVE)
    private List<OrderDetail> orderdetail;
}
