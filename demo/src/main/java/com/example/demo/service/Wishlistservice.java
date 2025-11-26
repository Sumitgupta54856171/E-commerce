package com.example.demo.service;


import com.example.demo.entity.Wishlist;
import com.example.demo.repositery.Wishlistrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Wishlistservice {


    @Autowired
    Wishlistrepo wishlistrepo;

    public String savewishlist(Wishlist wishlist){
        if(wishlist==null)return ("wishlist is null");
        try{
         wishlistrepo.save(wishlist);
          return "success";
        }catch (Exception e){
            return e.getMessage();
        }
    }
    public ResponseEntity<List<Wishlist>> getallwishlist(Long userid){
        if(userid == null){return ResponseEntity.ok().body(null);}
        try{
            ResponseEntity.ok(wishlistrepo.findByUserId(userid));
        }catch (Exception e){
            return ResponseEntity.ok(null);
        }
        return null;
    }
}
