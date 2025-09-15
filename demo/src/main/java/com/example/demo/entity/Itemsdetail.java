package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Itemsdetail {
    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String productname;

    @Column(nullable = false)
    private int productprice;

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
    private String productcolor;

    @Column(nullable = false)
    private int discountpirce;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(nullable = false)
    private String email;
    // Persist a copy of the user's email to satisfy existing DB NOT NULL constraint on product.email

    // Accept flat user_id from JSON while not persisting it directly
    @Transient
    @JsonProperty("user_id")
    private Long user_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Maintain existing accessors used elsewhere
    public int getdp(){
        return discountpirce;
    }
    public void setdp(int discountpirce){
        this.discountpirce = discountpirce;
    }

    // Standard getters for JSON compatibility with key "discountpirce"
    public int getDiscountpirce() {
        return discountpirce;
    }
    public void setDiscountpirce(int discountpirce) {
        this.discountpirce = discountpirce;
    }

    // Accessors for transient user_id mapped from JSON
    @JsonProperty("user_id")
    public Long getUser_id() {
        return user_id;
    }
    @JsonProperty("user_id")
    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public String getProductname() {
        return productname;
    }
    public void setProductname(String productname) {
        this.productname = productname;
    }

    public int getProductprice() {
        return productprice;
    }
    public void setProductprice(int productprice) {
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



    public String getProductcolor() {
        return productcolor;
    }
    public void setProductcolor(String productcolor) {
        this.productcolor = productcolor;
    }



    @Override
    public String toString() {
        return "Itemsdetail{" +
                "id=" + id +
                ", productname=" + productname +
                ", productprice=" + productprice +
                ", productquantity=" + productquantity +
                ", image=" + image +
                ", productdescription=" + productdescription +
                ", category=" + category +
                ", productbrand=" + productbrand +
                ", productcolor=" + productcolor +
                '}';
    }
}
