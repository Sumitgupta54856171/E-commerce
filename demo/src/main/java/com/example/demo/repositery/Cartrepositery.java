package com.example.demo.repositery;

import com.example.demo.entity.Cartitem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Cartrepositery extends JpaRepository<Cartitem,Long> {

}
