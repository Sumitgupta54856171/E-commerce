package com.example.demo.service;

import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.ProductDoc;
import com.example.demo.repositery.Productrepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class Searchservice {

    @Autowired
    private Productrepositery productrepositery;
    @Autowired
    private ElasticsearchOperations elasticsearchOperations;


    public List<ProductDoc> searchProduct(String query){

    }

}
