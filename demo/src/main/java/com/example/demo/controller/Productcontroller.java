package com.example.demo.controller;

import com.example.demo.dto.Productdto;
import com.example.demo.entity.Itemsdetail;
import com.example.demo.map.Productmap;
import com.example.demo.service.Productservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/product")
public class Productcontroller {
@Autowired
private Productservice productservice;
    @Autowired
    private Productmap productmap;

    @PostMapping("/add")
    public Itemsdetail addproduct(@RequestBody Itemsdetail itemsdetail){
        System.out.println("product is added"+itemsdetail);
        return productservice.addproduct(itemsdetail);
    }
    @GetMapping("/items")
         public ResponseEntity<List<Productdto>> getallproduct(){
        return productservice.getallproduct();
    }
    @GetMapping("/items/{id}")
    public Optional<Productdto> getproductbyid(@PathVariable("id") int id){
        return productmap.getproductbyid(id);
    }
    @GetMapping("/search/{query}")
    public ResponseEntity<List<Productdto>> getallproduct(@PathVariable("query") String query){
        return productservice.getsearchproduct(query);
    }

}
