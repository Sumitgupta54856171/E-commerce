package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.eclipse.angus.mail.imap.protocol.Item;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.List;


@Setter
@Getter
@Entity
@Table(name="order_table")
public class Order {
    @Id
    @GeneratedValue
    private String order_id;

    @Column(nullable = false)
    private int quantity;
    @ManyToOne
    @JoinColumn(name="user_id",nullable=true)
    private User user;

    @ManyToOne
    @JoinColumn(name="item_id",nullable = false)
    private Itemsdetail item;
    @Transient
    @JsonProperty("user_id")
    private Long user_id;

    @Transient
    @JsonProperty("item_id")
    private Long item_id;






}
