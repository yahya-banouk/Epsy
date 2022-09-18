package com.example.backend.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Appointment {
    private String idDoctor;
    private String idPatient;
    private String date;
}
