package com.example.demo.map;

import com.example.demo.repositery.Userrepositery;
import com.example.demo.dto.Userdto;
import com.example.demo.entity.User;
import com.example.demo.exception.Validerror;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Userprofile {

@Autowired
    private Userrepositery userrepositery;
public Userdto getuser(String email){
    User user = userrepositery.findByEmail(email)
            .orElseThrow(()->new Validerror(email+"not found"));
    return usermapdto(user);
}
public Userdto usermapdto(User user){
    Userdto userdto = new Userdto();
    userdto.setEmail(user.getEmail());
    userdto.setRole(user.getRole());
    userdto.setId(user.getId());
    userdto.setUsername(user.getUsername());
    return userdto;
}

}
