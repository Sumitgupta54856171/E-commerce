package com.example.demo.config;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

@Component
public class Cookies {

    public String Cookiessession(String token, HttpServletResponse response){
        Cookie cookie = new Cookie("email", token);
        cookie.setMaxAge(60 * 60 * 24);
        cookie.setPath("/api");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        response.addCookie(cookie);
        return token;
    }
}
