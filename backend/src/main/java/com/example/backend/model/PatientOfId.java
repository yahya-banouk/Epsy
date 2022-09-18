package com.example.backend.model;

import lombok.*;

import javax.persistence.Embeddable;
import java.io.Serializable;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class PatientOfId implements Serializable {
    private static final long serialVersionUID = 1L;

    private String idDoctor;
    private String idPatient;

}
