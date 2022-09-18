package com.example.backend.model;


import lombok.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Assesement {


    private int id;

    private Date date;

    private String sommeil;

    private String stress;

    private String fatigue;

    private String tristesse;


    private String idPatient;
}
