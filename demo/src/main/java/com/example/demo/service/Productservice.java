package com.example.demo.service;

import com.example.demo.config.Jwtconfig;
import com.example.demo.repositery.Productrepositery;
import com.example.demo.repositery.Userrepositery;
import com.example.demo.dto.Productdto;
import com.example.demo.entity.Itemsdetail;
import com.example.demo.entity.User;
import com.example.demo.exception.Validerror;
import com.example.demo.map.Productmap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CookieValue;

import java.util.List;
import java.util.Optional;

@Service
public class Productservice {
  @Autowired
    private Productrepositery productrepositery;
  @Autowired
  private Userrepositery Userrepositery;
  @Autowired
  private Jwtconfig jwtconfig;
@Autowired
private Productmap productmap;

  public Itemsdetail addproduct(Itemsdetail itemsdetail){
      System.out.println("check the prodct is :"+itemsdetail);





      // Hydrate user from transient user_id if provided
      try {
          if (itemsdetail.getUser() == null && itemsdetail.getUser_id() != null) {
              User user = Userrepositery.findById(itemsdetail.getUser_id())
                      .orElseThrow(() -> new Validerror("Invalid user_id"));
              itemsdetail.setUser(user);
          }
      } catch (Exception e) {
          // If any exception occurs during user hydration, wrap as validation error
          throw (e instanceof Validerror) ? (Validerror) e : new Validerror("Invalid user_id");
      }

      // Validate required fields: user_id and discount price
      if (itemsdetail.getUser() == null || itemsdetail.getUser().getId() == null) {
          throw new Validerror("user_id is required");
      }
      if (itemsdetail.getDiscountpirce() <= 0) {
          throw new Validerror("discountprice is required");
      }



      return productrepositery.save(itemsdetail);

  }
  public ResponseEntity<List<Productdto>> getallproduct(){
      return ResponseEntity.ok(productmap.getproducts());
  }
  public ResponseEntity<Optional<Productdto>> getproductbyid(Integer id){
      return ResponseEntity.ok(productmap.getproductbyid(id));
  }
  public ResponseEntity<List<Productdto>> getsearchproduct(String query){
    return ResponseEntity.ok(productmap.getsearchproducts(query));
  }


}
