package com.example.backend.model;


import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.Pattern;

@Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @Entity
    @Table(name = "user")
    public class User {


        @Id

        @Column(nullable = false, unique = true)
        private String username;

        private String password;
        @Pattern(regexp = "(doctor|admin|patient)" , message = "role is not valid")

        private String role;


}
