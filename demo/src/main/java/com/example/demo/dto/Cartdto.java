package com.example.demo.dto;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
public class Cartdto {
    private Long cart_id;
    private Long user_id;
    private int product_id;
    private int quantity;


}
