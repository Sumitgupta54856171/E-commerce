package com.example.demo.service;

import com.example.demo.dto.Cartdto;
import com.example.demo.entity.Cartitem;
import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.User;
import com.example.demo.exception.Validerror;
import com.example.demo.map.Cartmap;
import com.example.demo.repositery.Cartrepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Cartservice {

    @Autowired
    private Cartmap cartmap;
    @Autowired
    private Cartrepositery cartrepositery;
    public List<Cartdto> getcart(Long userid){
        return cartmap.getCartdto(userid);

    }
    public Cartitem addcart(Cartitem cartitem) {
        System.out.println("cartitem userid is :"+cartitem.getUser());
        System.out.println("cartitem itemsdetail is :"+cartitem.getItemsdetail());
        System.out.println("cartitem quantity is :"+cartitem.getQuantity());
        if (cartitem == null) {
            throw new Validerror("Request body 'cartitem' is required");
        }
        // Map flat IDs from JSON to associations if provided
        if (cartitem.getUser() == null && cartitem.getUserid() != null) {
            User u = new User();
            u.setId(cartitem.getUserid());
            cartitem.setUser(u);
        }
        if (cartitem.getItemsdetail() == null && cartitem.getProduct_id() != null) {
            Itemsdetail it = new Itemsdetail();
            it.setId(cartitem.getProduct_id());
            cartitem.setItemsdetail(it);
        }

        int quantity = cartitem.getQuantity();
        User user = cartitem.getUser();
        Itemsdetail itemsdetail = cartitem.getItemsdetail();

        if (quantity <= 0) {
            throw new Validerror("quantity must be greater than 0");
        }
        if (user == null || user.getId() == null) {
            throw new Validerror("user.id is required");
        }
        if (itemsdetail == null || itemsdetail.getId() <= 0) {
            throw new Validerror("itemsdetail.id must be a positive integer");
        }
        return cartrepositery.save(cartitem);
    }
}
