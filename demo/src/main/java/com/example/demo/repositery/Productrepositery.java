package com.example.demo.repositery;

import com.example.demo.entity.Itemsdetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface Productrepositery extends JpaRepository<Itemsdetail, Integer> {


    Optional<Itemsdetail> findByProductname(String productname);
    List<Itemsdetail> findByCategory(String category);

    // Partial, case-insensitive matches for better search experience
    List<Itemsdetail> findByProductnameContainingIgnoreCase(String productname);
    List<Itemsdetail> findByProductbrandContainingIgnoreCase(String productbrand);
    List<Itemsdetail> findByCategoryContainingIgnoreCase(String category);

    // Search within the details element collection using a LIKE match
    @Query("select distinct i from Itemsdetail i join i.details d where lower(d) like lower(concat('%', :q, '%'))")
    List<Itemsdetail> searchByDetailLike(@Param("q") String q);


}
