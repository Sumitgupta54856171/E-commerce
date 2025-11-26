package com.example.demo.controller;


import com.example.demo.dto.Cartdto;
import com.example.demo.entity.Cartitem;
import com.example.demo.entity.Wishlist;
import com.example.demo.service.Cartservice;
import com.example.demo.service.Wishlistservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
public class Cartcontroller {

    @Autowired
    private Cartservice cartservice;
    @Autowired
    private Wishlistservice wishlistservice;

    @PostMapping("/addcart")
    public Cartitem addCart(@RequestBody Cartitem cartitem){
        return cartservice.addcart(cartitem);
    }
    @GetMapping("{userid}")
    public List<Cartdto> getcart(@PathVariable("userid") Long userid){
        return cartservice.getcart(userid);
    }

    public String savewish(@RequestBody Wishlist wishlist){
        return wishlistservice.savewishlist(wishlist);
    }
    public ResponseEntity<List<Wishlist>> getallwishlist(@RequestBody Long userid){
        return wishlistservice.getallwishlist(userid);
    }


}
