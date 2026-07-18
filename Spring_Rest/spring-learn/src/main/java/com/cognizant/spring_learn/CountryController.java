package com.cognizant.spring_learn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {

        Country country = new Country();
        country.setCode("IN");
        country.setName("India");

        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {

        if (code.equalsIgnoreCase("IN")) {
            Country country = new Country();
            country.setCode("IN");
            country.setName("India");
            return country;
        }

        if (code.equalsIgnoreCase("US")) {
            Country country = new Country();
            country.setCode("US");
            country.setName("United States");
            return country;
        }

        return null;
    }
}