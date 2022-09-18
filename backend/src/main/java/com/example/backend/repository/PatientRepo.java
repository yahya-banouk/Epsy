package com.example.backend.repository;

import com.example.backend.model.ICount;
import com.example.backend.model.IGrowthPercentage;
import com.example.backend.model.IPatientCountChartPoint;
import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface PatientRepo extends JpaRepository<Patient,String> {
    @Query("select p from Patient p join p.patientOfs e join e.doctor d where d.email=?1")
    List<Patient> findPatientByDoctor(String idDoctor);

    @Query("select p from Patient p join p.patientOfs e join e.doctor d " +
            "where d.email=?1 and concat(p.nom,' ',p.prenom) like %?2% ")
    List<Patient> findPatientByFullname(String idDoctor, String fullname);

    @Query(nativeQuery = true,value = "select p.* from patient p, doctor d, patientof pf " +
            "where pf.doctor_email=d.email and pf.patient_email=p.email " +
            "and d.email = :idDoctor " +
            "order by pf.date_debut desc limit 4")
    List<Patient> getNewJoinedPatientsByDoctor(@Param("idDoctor") String idDoctor);


    @Query(nativeQuery = true,value = "CALL getPatientCountChartByDoctor(:idDoctor);")
    List<IPatientCountChartPoint> getPatientCountChartByDoctor(@Param("idDoctor") String idDoctor);

    @Query(nativeQuery = true, value="call getPatientCountByDoctor(:idDoctor);")
    List<ICount> getPatientCountByDoctor(String idDoctor);

    @Query(nativeQuery = true, value="call getPatientGrowthByDoctor(:idDoctor);")
    List<IGrowthPercentage> getPatientGrowthByDoctor(String idDoctor);

    List<Patient> findPatientByEmail(@Param("email") String idPatient);

}
