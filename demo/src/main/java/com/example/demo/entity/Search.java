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
public class Search {

    @Id
    @GeneratedValue
    private Long id;

    private String search;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Transient
    @JsonProperty("user_id")
    private Long user_id;
}
