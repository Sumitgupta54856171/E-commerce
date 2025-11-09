package com.example.demo.map;

import com.example.demo.dto.Orderdto;
import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.Order;
import com.example.demo.entity.User;
import com.example.demo.repositery.Orderrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.filter.OrderedRequestContextFilter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class Ordermap {
@Autowired
private Orderrepo orderrepo;

    public List<Orderdto> toDto(Long id) {
        List<Order> dto = orderrepo.findAll();
        return dto.stream()
                .filter(o -> o.getUser_id().equals(id))
                .map(this::toDto)
                .collect(Collectors.toList());

    }
    public Orderdto toDto(Order order) {
        if (order == null) return null;
        Orderdto dto = new Orderdto();
        dto.setOrder_id(order.getOrder_id());
        dto.setQuantity(order.getQuantity());
        dto.setUser_id(order.getUser() != null ? order.getUser().getId() : null);
        dto.setItem_id(order.getItem() != null ? order.getItem().getId() : null);
        return dto;
    }

    // DTO -> Entity (lightweight). Associations should be resolved in service layer.
    public Order toEntity(Orderdto dto) {
        if (dto == null) return null;
        Order order = new Order();
        // For updates, allow carrying existing id
        if (dto.getOrder_id() != null && !dto.getOrder_id().isEmpty()) {
            order.setOrder_id(dto.getOrder_id());
        }
        order.setQuantity(dto.getQuantity());

        // Prefer setting transient IDs so the service can look up actual entities
        order.setUser_id(dto.getUser_id());
        if (dto.getItem_id() != null) {
            order.setItem_id(dto.getItem_id().longValue());
        }

        // Optionally, if you want to attach stub references (uncomment if your persistence flow supports it)
        // if (dto.getUser_id() != null) {
        //     User u = new User();
        //     u.setId(dto.getUser_id());
        //     order.setUser(u);
        // }
        // if (dto.getItem_id() != null) {
        //     Itemsdetail item = new Itemsdetail();
        //     item.setId(dto.getItem_id());
        //     order.setItem(item);
        // }
        return order;
    }
}
