package com.example.backend.repository;

import com.example.backend.model.Patient;
import com.example.backend.model.PatientOf;
import com.example.backend.model.PatientOfId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientOfRepo extends JpaRepository<PatientOf, PatientOfId> {

    @Query(nativeQuery = true,value = "call findPatientOfByIdPatient(:idPatient)")
    List<PatientOf> findPatientOfByIdPatient(String idPatient);
}
