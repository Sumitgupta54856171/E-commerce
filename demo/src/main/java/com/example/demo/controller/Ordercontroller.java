package com.example.demo.controller;


import com.example.demo.entity.Order;
import com.example.demo.entity.User;
import com.example.demo.repositery.Userrepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/order")
public class Ordercontroller {

  @Autowired
  private Userrepositery userrepositery;

    @PostMapping
    public Order saveOrder (Order order,@CookieValue(value="email") String email){
      Optional<User> userOptional= userrepositery.findByEmail(email);
      if (userOptional.isPresent()){
          order.setUser_id(userOptional.get().getId());
      }else {
          throw new RuntimeException("please retry");
      }
    }
}
