package com.example.demo.map;

import com.example.demo.dto.Cartdto;
import com.example.demo.entity.Cartitem;
import com.example.demo.repositery.Cartrepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class Cartmap {

    @Autowired
    private Cartrepositery cartrepositery1;

    public List<Cartdto> getCartdto(Long userid) {
        List<Cartitem> cartItems = cartrepositery1.findAll();
        return cartItems.stream()
                .filter(ci -> ci.getUser() != null && ci.getUser().getId() != null && ci.getUser().getId().intValue() == userid)
                .map(this::mapdtocartitem)
                .collect(Collectors.toList());
    }

    public Cartdto mapdtocartitem(Cartitem cartitem) {
        Cartdto dto = new Cartdto();
        dto.setCart_id(cartitem.getId());
        dto.setUser_id(cartitem.getUser() != null ? cartitem.getUser().getId() : null);
        dto.setProduct_id(cartitem.getItemsdetail() != null ? cartitem.getItemsdetail().getId() : 0);
        dto.setQuantity(cartitem.getQuantity());
        return dto;
    }
}
