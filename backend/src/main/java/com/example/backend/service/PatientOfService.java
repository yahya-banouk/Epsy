package com.example.backend.service;


import com.example.backend.model.PatientOf;
import com.example.backend.repository.PatientOfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientOfService {
    @Autowired
    private PatientOfRepo repo;

    public boolean hasDoctor(String idPatient){
        List<PatientOf> patientOfs = repo.findPatientOfByIdPatient(idPatient);
        if(patientOfs.isEmpty()) return false;
        else return true;
    }
}
