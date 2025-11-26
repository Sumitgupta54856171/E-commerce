package com.example.demo.entity;



import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;


import java.util.List;
import java.util.Map;

@Document(indexName = "products")
public class ProductDoc {

    @Id
    private String id;

    @Field(type = FieldType.Text, name = "productname")
    private String productname;

    @Field(type = FieldType.Text,name = "description")
    private String description;

    @Field(type = FieldType.Keyword, name = "productbrand")
    private String productbrand;

    @Field(type = FieldType.Keyword, name = "category")
    private String category;

    @Field(type = FieldType.Double, name = "productprice")
    private Double productprice;

    @Field(type = FieldType.Integer,name = "productquantity")
    private Integer productquantity;

    @Field(type = FieldType.Boolean,name = "inStock")
    private Boolean inStock;

    @Field(type = FieldType.Text,name = "productcolor")
    private List<String> details;

    @Field(type = FieldType.Object,name = "specification")
    private Map<String, String> specification;

    @Field(type = FieldType.Integer, name = "discountpirce")
    private int discountpirce;

    // getters / setters
    // ... generate or use Lombok
}
