package com.example.demo.service;


import com.example.demo.config.Jwtconfig;
import com.example.demo.entity.Order;
import com.example.demo.map.Ordermap;
import com.example.demo.repositery.Orderrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class Orderservice {
    @Autowired
    Jwtconfig jwtconfig;
    @Autowired
    private Ordermap ordermap;
    @Autowired
    private Orderrepo orderrepo;

    public ResponseEntity<?> ordersave(Order order){

        if(order == null){
            return ResponseEntity.badRequest().body("please return order is mis");
        } else if(order.getUser() == null || order.getUser().getId() == null){
            return ResponseEntity.badRequest().body("please return user id is mis");
        }else{
            orderrepo.save(order);
            return ResponseEntity.ok("success order is place");
        }
    }

}
