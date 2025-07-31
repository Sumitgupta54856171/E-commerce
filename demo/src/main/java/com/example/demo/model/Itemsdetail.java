package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;


@Entity
@Table(name = "Items")
public class Itemsdetail {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue
    private int id;
    @Column(nullable = false)

    private String productname;
    @Column(nullable = false)
    private String productprice;
    @Column(nullable = false)
    private String productquantity;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private String productdescription;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private String productbrand;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String productcolor;
    @Column(nullable = true)
    private int discountpirce;


public int getdp(){
    return discountpirce;
}
public void setdp(int  discountpirce){
    this.discountpirce=discountpirce;
}

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getProductname() {
        return productname;
    }
    public void setProductname(String productname) {
        this.productname = productname;
    }
    public String getProductprice() {
        return productprice;
    }
    public void setProductprice(String productprice) {
        this.productprice = productprice;
    }
    public String getProductquantity() {
        return productquantity;
    }
    public void setProductquantity(String productquantity) {
        this.productquantity = productquantity;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getProductdescription() {
        return productdescription;
    }
    public void setProductdescription(String productdescription) {
        this.productdescription = productdescription;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getProductbrand() {
        return productbrand;
    }
    public void setProductbrand(String productbrand) {
        this.productbrand = productbrand;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getProductcolor() {
        return productcolor;
    }
    public void setProductcolor(String productcolor) {
        this.productcolor = productcolor;
    }
    @Override
    public String toString() {
        return "Itemsdetail{" + "id=" + id + ", productid="  + ", productname=" + productname + ", productprice=" + productprice + ", productquantity=" + productquantity + ", image=" + image + ", productdescription=" + productdescription + ", category=" + category + ", productbrand=" + productbrand + ", email=" + email + ", productmaterial=" + ", productcolor=" + productcolor + '}';
    }



}
