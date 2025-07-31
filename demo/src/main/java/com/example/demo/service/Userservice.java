package com.example.demo.service;

import com.example.demo.Repositery.Userrepositery;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class Userservice {
@Autowired
private Userrepositery userrepositery;
public User saveUser(User user){
    return userrepositery.save(user);
}
public Optional<User> findById(int id){
    return userrepositery.findById(id);
}
    public List<User> getAllUsers() {
        return userrepositery.findAll();
    }
 public Optional<User> findById(String email){
     Optional<User> userdata =userrepositery.findByEmail(email);
     if(userdata.isPresent()){

     }
     return userdata;
 }
}