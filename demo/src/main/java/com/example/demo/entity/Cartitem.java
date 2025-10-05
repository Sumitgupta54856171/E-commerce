package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;


@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name="Cart")
public class Cartitem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private int quantity ;

    // Accept flat IDs from JSON payload for convenience; not persisted
    @Transient
    @JsonProperty("product_id")
    private Integer product_id;

    @Transient
    @JsonProperty("userid")
    private Long userid;

    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_id",referencedColumnName = "id")
    private Itemsdetail itemsdetail;
    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="userid",referencedColumnName = "id")
    private User user;
    @CreationTimestamp
    private Timestamp timestamp;
    @UpdateTimestamp
    private Timestamp updateTimestamp;
}
