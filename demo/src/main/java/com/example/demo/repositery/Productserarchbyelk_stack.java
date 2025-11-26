package com.example.demo.repositery;

import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.ProductDoc;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface Productserarchbyelk_stack extends ElasticsearchRepository<ProductDoc, Long> {
    List<ProductDoc> findByProductnameOrDetails(String productname,String details);
}
