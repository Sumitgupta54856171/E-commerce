package com.example.demo.dto;

import lombok.Data;
import reactor.util.annotation.NonNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@lombok.NoArgsConstructor
public class Productdto {
    private int id;

    @NonNull
    private String productName;

    private int productPrice;

    private int productQuantity;

    private List<String> Details = new ArrayList<String>();

    private Map<String,String> producSpecification;

    private String category;

    private String productBrand;

    private String productColor;

    private Long user_id;
    private int discountPrice;


}

