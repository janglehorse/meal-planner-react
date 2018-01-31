package com.calebtravers.mealplannerreact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final RecipeRepository repository;

    @Autowired
    public DatabaseLoader(RecipeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Recipe("Chicken Curry", "A delicious favorite"));
    }
}
