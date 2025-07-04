package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import org.springframework.stereotype.Component;

@Component
@Table(name = "Items")
public class Itemsdetail {
    @GeneratedValue
    private int id;
    @Column(nullable = false)
    private String productid;
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
    private String productmaterial;
    @Column(nullable = false)
    private String productcolor;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getProductid() {
        return productid;
    }
    public void setProductid(String productid) {
        this.productid = productid;
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
    public String getProductmaterial() {
        return productmaterial;
    }
    public void setProductmaterial(String productmaterial) {
        this.productmaterial = productmaterial;
    }
    public String getProductcolor() {
        return productcolor;
    }
    public void setProductcolor(String productcolor) {
        this.productcolor = productcolor;
    }
    @Override
    public String toString() {
        return "Itemsdetail{" + "id=" + id + ", productid=" + productid + ", productname=" + productname + ", productprice=" + productprice + ", productquantity=" + productquantity + ", image=" + image + ", productdescription=" + productdescription + ", category=" + category + ", productbrand=" + productbrand + ", email=" + email + ", productmaterial=" + productmaterial + ", productcolor=" + productcolor + '}';
    }
}
