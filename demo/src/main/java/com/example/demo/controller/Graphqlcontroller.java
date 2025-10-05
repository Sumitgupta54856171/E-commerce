package com.example.demo.controller;

import com.example.demo.dto.Productdto;
import com.example.demo.service.Productservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class Graphqlcontroller {
    @Autowired
    private Productservice productservice;

    // GraphQL query: getAllProducts -> returns list of Productdto
    @QueryMapping(name = "getAllProducts")
    public List<Productdto> getAllProducts() {
        return productservice.getallproduct().getBody();
    }

    // GraphQL query: getProductbyID(id: ID!) -> returns a single Productdto or null
    @QueryMapping(name = "getProductbyID")
    public Productdto getProductbyID(@Argument("id") int id) {
        return productservice.getproductbyid(id).getBody().orElse(null);
    }
}
