package com.example.demo.controller;

import com.example.demo.Repositery.Userrepositery;
import com.example.demo.model.User;
import com.example.demo.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5*173")
public class Usercontroller {

@Autowired
private Userservice userservice;

@PostMapping("/register")
    public User saveUser(@RequestBody User user) {
    return userservice.saveUser(user);
}






}