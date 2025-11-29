package com.example.demo.service;

import co.elastic.clients.elasticsearch._types.query_dsl.BoolQuery;
import co.elastic.clients.elasticsearch._types.query_dsl.Query;
import com.example.demo.entity.productdoc;
import com.example.demo.repositery.Productserarchbyelk_stack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class Searchservice {

    @Autowired
    private Productserarchbyelk_stack productSearchRepository;
    @Autowired
    private ElasticsearchOperations elasticsearchOperations;


    public List<productdoc> searchProduct(String query){
        BoolQuery.Builder boolQuery = new BoolQuery.Builder();
        if (query != null && !query.isEmpty()) {

            boolQuery.should(s -> s.match(m -> m
                    .field("productname")
                    .query(query)
                    .boost(2.0f)
            ));
            boolQuery.should(s -> s.match(m -> m
                    .field("details")
                    .query(query)
            ));
            boolQuery.minimumShouldMatch("1");
        }
        Query query1 = Query.of(q -> q.bool(boolQuery.build()));
        NativeQuery nativeQuery = NativeQuery.builder()
                .withQuery(query1)
                .build();

        SearchHits<productdoc> searchHits = elasticsearchOperations.search(nativeQuery, productdoc.class);
        return searchHits.getSearchHits()
                .stream()
                .map(hit -> hit.getContent())
                .collect(Collectors.toList());

    }

}
