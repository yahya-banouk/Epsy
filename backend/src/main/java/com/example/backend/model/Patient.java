package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "patient")
public class Patient {

    @Id
    @NonNull
    private String email;

    @Column(name = "nom")
    @NonNull
    private String nom;

    @Column(name = "prenom")
    @NonNull
    private String prenom;

    @Column(name = "tel")
    @NonNull
    private String tel;

    @Column(name = "password")
    @NonNull
    private String password;

    @Column(name = "sex")
    @NonNull
    private String sex;

    @Column(name = "date_naissance")
    @NonNull
    private String dateNaissance;

    @Column(name = "situation")
    @NonNull
    private String situation;

    @Column(name = "cin")
    @NonNull
    private String cin;

    @OneToMany(mappedBy = "patient", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<PatientOf> patientOfs;

    @OneToMany(mappedBy = "patient", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<RendezVous> rendezVous;

    @OneToMany(mappedBy = "patient", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Suivi> suivi;

}
