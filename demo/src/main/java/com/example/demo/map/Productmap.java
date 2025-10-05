package com.example.demo.map;

import com.example.demo.repositery.Productrepositery;
import com.example.demo.dto.Productdto;
import com.example.demo.entity.Itemsdetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class Productmap {


  @Autowired
  private Productrepositery productrepositery;
    public List<Productdto> getproducts(){
      List<Itemsdetail> items = productrepositery.findAll();
        return items.stream()
                .map(this::mapdtoproduct)
                .collect(Collectors.toList());
    }
    public Optional<Productdto> getproductbyid(int id){
        return productrepositery.findById(id)
                .map(this::mapdtoproduct);
    }
    public List<Productdto> getsearchproducts(String query){
        if(query.isEmpty()){
            throw new IllegalArgumentException("query is empty");
        }
        List<Itemsdetail> items = productrepositery.findByCategory(query);
        if(items.isEmpty()){
            throw new IllegalArgumentException("no product found");
        }
        return items.stream()
                .map(this::mapdtoproduct)
                .collect(Collectors.toList());
    }
    public Productdto mapdtoproduct(Itemsdetail itemsdetail){
Productdto pro = new Productdto();
pro.setId(itemsdetail.getId());
pro.setCategory(itemsdetail.getCategory());
pro.setProductBrand(itemsdetail.getProductbrand());
pro.setProductColor(itemsdetail.getProductcolor());
pro.setImage(itemsdetail.getImage());
pro.setdp(itemsdetail.getdp());
pro.setProductDescription(itemsdetail.getProductdescription());
pro.setProductPrice(itemsdetail.getProductprice());
pro.setProductName(itemsdetail.getProductname());
pro.setUser_id(itemsdetail.getUser().getId().intValue());

return pro;
    }


}
