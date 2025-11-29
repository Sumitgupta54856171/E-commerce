package com.example.demo.controller;


import com.example.demo.service.Productservice;
import com.example.demo.service.Searchservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/search")
public class Searchcontroller {

    @Autowired
    private Searchservice productservice;

@GetMapping("/query")
public Object search(@RequestParam("q") String query){
    return productservice.searchProduct(query);
}

}
