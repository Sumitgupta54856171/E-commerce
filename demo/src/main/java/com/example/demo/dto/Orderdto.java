package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class Orderdto {
    private String order_id; // UUID string
    private int quantity;
    private Long user_id; // matches User.id type
    private Integer item_id; // matches Itemsdetail.id type
}
