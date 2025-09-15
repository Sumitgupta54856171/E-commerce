package com.example.demo.repositery;

import com.example.demo.entity.Itemsdetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Productrepositery extends JpaRepository<Itemsdetail, Integer> {


    Optional<Itemsdetail> findByProductname(String productname);

}
