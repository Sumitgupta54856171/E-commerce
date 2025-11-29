package com.example.demo.repositery;


import com.example.demo.entity.productdoc;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface Productserarchbyelk_stack extends ElasticsearchRepository<productdoc,String> {
    List<productdoc> findByProductnameOrDetails(String productname, String details);
}
