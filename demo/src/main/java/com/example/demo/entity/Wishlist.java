
package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    @Transient
    @JsonProperty("user_id")
    private Long user_id;
    @ManyToOne
    @JoinColumn(name="product_id")
    private Itemsdetail itemsdetail;

    @Transient
    @JsonProperty("product_id")
    private Long product_id;
}
