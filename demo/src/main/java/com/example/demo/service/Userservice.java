package com.example.demo.service;

import com.example.demo.Repositery.Userrepositery;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Userservice {
    @Autowired
    private Userrepositery userrepositery;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userrepositery.save(user);
    }

    public Optional<User> findById(int id) {
        return userrepositery.findById(id);
    }

    public List<User> getAllUsers() {
        return userrepositery.findAll();
    }

    public Optional<User> findByEmail(String email) {
        return userrepositery.findByEmail(email);
    }
}