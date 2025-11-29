package com.example.demo.controller;

import com.example.demo.config.Cookies;
import com.example.demo.config.Jwtconfig;
import com.example.demo.dto.Productdto;
import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.User;
import com.example.demo.entity.productdoc;
import com.example.demo.map.Productmap;
import com.example.demo.repositery.Productrepositery;
import com.example.demo.repositery.Userrepositery;
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
    @Autowired
    private Userrepositery userrepositery;
    @Autowired
    private Productrepositery productrepositery;
    @Autowired
    private Jwtconfig jwtconfig;

    @PostMapping("/add")
    public String addproduct(@RequestBody Itemsdetail itemsdetail,@CookieValue(value="email") String email){
        System.out.println("product is added"+itemsdetail);
        System.out.println(email);
        String useremail =jwtconfig.getEmail(email);
        System.out.println(useremail);
       Optional<User>  userOptional= userrepositery.findByEmail(useremail);
       if(userOptional.isPresent()){
           itemsdetail.setUser(userOptional.get());
           return productservice.addproduct(itemsdetail);
       }{
          throw new RuntimeException("user is not found");
        }


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
    @PostMapping("/serchsave")
    public String saveproduct(@RequestBody productdoc productDto){
        return productservice.saveproductserch(productDto);
    }

}
