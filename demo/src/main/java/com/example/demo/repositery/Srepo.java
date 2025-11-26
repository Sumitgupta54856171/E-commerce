package com.example.demo.repositery;


import com.example.demo.entity.Search;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Srepo extends JpaRepository<Search,Long> {
    List<Search> findBySearch(String search);
}
