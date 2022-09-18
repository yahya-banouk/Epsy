package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.sql.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "suivi")
public class Suivi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "date")
    private Date date;

    @Column(name = "sommeil")
    private String sommeil;

    @Column(name = "stress")
    private String stress;

    @Column(name ="fatigue")
    private String fatigue;

    @Column(name = "tristesse")
    private String tristesse;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @NonNull
    private Patient patient;

}
