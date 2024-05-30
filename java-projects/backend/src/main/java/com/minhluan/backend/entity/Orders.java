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
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String email;
    private String phone_number;
    private String address;
    private String note;
    private Date order_data;
    private int status;
    private int total_money;

    @ManyToOne
    private User user;  
    
    @JsonIgnore
    @OneToMany(mappedBy = "order", cascade = CascadeType.REMOVE)
    private List<OrderDetail> orderdetail;

     
}
