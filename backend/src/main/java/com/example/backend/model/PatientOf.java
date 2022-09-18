package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "patientof")
public class PatientOf {

    @EmbeddedId
    private PatientOfId id = new PatientOfId();

    private Date dateDebut;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @MapsId("idDoctor")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @MapsId("idPatient")
    private Patient patient;


}
