package com.example.demo.service;

import com.example.demo.repositery.Userrepositery;
import com.example.demo.config.Cookies;
import com.example.demo.config.Jwtconfig;
import com.example.demo.dto.Userdto;
import com.example.demo.exception.Emailnotfound;
import com.example.demo.exception.Execptionerror;
import com.example.demo.exception.Response;
import com.example.demo.exception.Validerror;
import com.example.demo.entity.User;
import com.example.demo.map.Userprofile;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Userservice {
    @Autowired
    private Userrepositery userrepositery;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private Jwtconfig jwtconfig;
    @Autowired
    private Cookies cookies;
    @Autowired
    private Response response;
    @Autowired
    private Userprofile userprofile;

    public User saveUser(User user) throws Exception {
        if (userrepositery.existsByEmail(user.getEmail())) {
            throw new Execptionerror("Email already exists: " + user.getEmail());
        }
        System.out.println("check the user is :"+user.getEmail());
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userrepositery.save(user);
    }

    public Optional<User> findById(Long id) {
        return userrepositery.findById(id);
    }



    public ResponseEntity<Userdto> findByEmail(String emails) {
        System.out.println("check the user is :"+emails);
       String email= (jwtconfig.getEmail(emails)).toString();
        System.out.println("check the user emails is :"+email);
        if(userrepositery.existsByEmail(email)){

             return ResponseEntity.ok(userprofile.getuser(email));
         }else{
             throw new Emailnotfound("invalid user");
         }
               
    }

    public ResponseEntity<String> existsuser(String email, String password, HttpServletResponse response) {
        System.out.println("check the user is :"+email+"check the password is :"+password);
        if(userrepositery.existsByEmail(email)){
          if(passwordEncoder.matches(password, userrepositery.findByEmail(email).get().getPassword())){
              String token = jwtconfig.generateToken(email);
              String cookiessession = cookies.Cookiessession(token, response);
              return ResponseEntity.ok(cookiessession);
          } else {
              throw new Validerror("Invalid password");
          }
      } else {
          throw new Validerror("Invalid email");
      }
    }
    public ResponseEntity<Boolean> authservice(String token) {
        if(token.isEmpty() || token == null){
            ResponseEntity.ok(false);
        }
         String email = jwtconfig.getEmail(token);
        if(email != null){
            ResponseEntity.ok(false);
        }

        boolean value = userrepositery.existsByEmail(email);
        return ResponseEntity.ok(value);

    }
}