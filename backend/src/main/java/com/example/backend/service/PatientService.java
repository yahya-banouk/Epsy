package com.example.backend.service;


import com.example.backend.model.*;
import com.example.backend.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    @Autowired
    PatientRepo patientRepo;

    public List<Patient> getPatients(){
        List<Patient> patients = new ArrayList<>();
        patientRepo.findAll().forEach(patients::add);
        return patients;
    }

    public Optional<Patient> getPatient(String email){
        return patientRepo.findById(email);
    }

    public void ajouterPatient(Patient patient){
        patientRepo.save(patient);
    }

    public void modifierPatient(Patient patient){
        patientRepo.save(patient);
    }

    public void supprimerPatient(Patient patient){
        patientRepo.delete(patient);
    }

    public List<Patient> findPatientByDoctor(String idDoctor){
        List<Patient> patients = patientRepo.findPatientByDoctor(idDoctor);
        return patients;
    }

    public List<Patient> findPatientByFullname(String email,String fullname){
        List<Patient> patients = patientRepo.findPatientByFullname(email,fullname);
        return patients;
    }

    public List<ICount> getPatientCountByDoctor(String idDoctor){
        return patientRepo.getPatientCountByDoctor(idDoctor);
    }

    public List<IGrowthPercentage> getPatientGrowthByDoctor(String idDoctor){
        List<IGrowthPercentage> growth= patientRepo.getPatientGrowthByDoctor(idDoctor);
        if(growth.get(0)==null) {
            Percentage percentage = new Percentage();
            percentage.setPercentage(BigDecimal.valueOf(0));
            growth.clear();
            growth.add(percentage);
        }
        return growth;
    }

    public List<Patient> getNewJoinedPatientsByDoctor(String idDoctor){
        return patientRepo.getNewJoinedPatientsByDoctor(idDoctor);
    }

    public List<IPatientCountChartPoint> getPatientCountChartByDoctor(String idDoctor){
        return patientRepo.getPatientCountChartByDoctor(idDoctor);
    }

    public Patient getProfile(String idPatient){
        return patientRepo.findPatientByEmail(idPatient).get(0);
    }
}
