package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class Email {
    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleMail(String to,String subject,String body){
        SimpleMailMessage message = new SimpleMailMessage();
         message.setFrom("guptaashish2531@gmail.com");
         message.setTo(to);
         message.setSubject(subject);
         message.setText(body);
         mailSender.send(message);
    }
}
