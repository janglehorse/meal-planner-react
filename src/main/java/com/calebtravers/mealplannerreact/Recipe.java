package com.calebtravers.mealplannerreact;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Recipe {

    private @Id @GeneratedValue Long id;
    private String name;
    private String description;
    // TODO: implement numbered instructions
    // TODO: implement ingredient class
    // TODO: add photo
    // TODO: implement user class

    private Recipe () {}

    public Recipe(String name, String description) {
        this.name = name;
        this.description = description;
    }


}
