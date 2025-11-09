package com.example.demo.entity;

import com.example.demo.HashMapConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Itemsdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String productname;

    @Column(nullable = false)
    private int productprice;

    @Column(nullable = false)
    private int productquantity;


    @ElementCollection
    @Column(name="detail")
    private List<String> details = new ArrayList<String>();

    @Column(name="productdescription",columnDefinition = "TEXT",nullable = true)
    @Convert(converter = HashMapConverter.class)
    private Map<String,String> specification;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String productbrand;


    @Column(nullable = false)
    private String productcolor;

    @Column(nullable = false)
    private int discountpirce;

    @Transient
    @JsonProperty("user_id")
    private Long user_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = true)
    private User user;



}
