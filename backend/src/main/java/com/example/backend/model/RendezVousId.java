package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.sql.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class RendezVousId implements Serializable {

    private static final long serialVersionUID = 1L;

    private Date date;
    private String idDoctor;
    private String idPatient;
}
