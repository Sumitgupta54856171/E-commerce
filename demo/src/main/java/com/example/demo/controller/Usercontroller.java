package com.example.demo.controller;

import com.example.demo.config.Jwtconfig;
import com.example.demo.dto.Userdto;
import com.example.demo.exception.Response;
import com.example.demo.exception.Validerror;
import com.example.demo.entity.User;
import com.example.demo.service.Userservice;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5*173")
public class Usercontroller {
@Autowired
private Jwtconfig jwtconfig;
@Autowired
private Userservice userservice;
    @Autowired
    private Response response;

    @PostMapping("/register")
    public User saveUser(@RequestBody User user) throws Exception {
    return userservice.saveUser(user);
}
@PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user, HttpServletResponse response) throws Validerror {
        String token = jwtconfig.generateToken(user.getEmail());
        return userservice.existsuser(user.getEmail(), user.getPassword(), response);
}
@GetMapping("/profile")
    public ResponseEntity<Userdto> emailfind(@CookieValue(name="email")String email){
    System.out.println(email+"the cookies is valid");
   return  userservice.findByEmail(email);
}







}