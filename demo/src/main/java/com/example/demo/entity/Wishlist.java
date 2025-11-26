
package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Wishlist
{
    @Id
    @GeneratedValue
    private Long wishlist_id;
    private Long user_id;
    private int product_id;
}
