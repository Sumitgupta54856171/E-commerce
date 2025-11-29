package com.example.demo.entity;



import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;


import java.util.List;
import java.util.Map;

@Data
@Document(indexName = "product")
public class productdoc {

    @Id
    private String id;

    @Field(type = FieldType.Text, name = "productname")
    private String productname;


    @Field(type = FieldType.Keyword, name = "productbrand")
    private String productbrand;

    @Field(type = FieldType.Keyword, name = "category")
    private String category;
    @Field(type = FieldType.Integer,name="user_id")
    private Long user_id;
    @Field(type = FieldType.Double, name = "productprice")
    private Double productprice;
    @Field(type = FieldType.Integer,name = "productquantity")
    private Integer productquantity;
    @Field(type = FieldType.Text,name = "productcolor")
    private List<String> details;

    @Field(type = FieldType.Object,name = "specification")
    private Map<String, String> specification;

    @Field(type = FieldType.Integer, name = "discountpirce")
    private int discountpirce;

    // getters / setters
    // ... generate or use Lombok
}
