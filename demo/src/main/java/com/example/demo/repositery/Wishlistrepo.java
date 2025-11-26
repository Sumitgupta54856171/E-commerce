package com.example.demo.repositery;


import com.example.demo.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Wishlistrepo extends JpaRepository<Wishlist,Long> {
    List<Wishlist> findByUserId(Long id);

}
