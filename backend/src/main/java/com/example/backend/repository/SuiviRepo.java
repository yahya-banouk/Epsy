package com.example.backend.repository;

import com.example.backend.model.ISuivi;
import com.example.backend.model.Suivi;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;

@Transactional
public interface SuiviRepo extends CrudRepository<Suivi,Integer> {
    @Modifying
    @Query(nativeQuery = true,value="call saveAssesement(:fatigue,:sommeil, :stress, :tristesse, :idPatient)")
   void assesement(

                        String fatigue,
                        String sommeil,
                        String stress,
                        String tristesse,
                        String idPatient);


    @Query(nativeQuery = true, value= "select * from suivi where suivi.patient_email =:idPatient order by suivi.date limit 30;")
    List<Suivi> getSuivi(@Param("idPatient") String idPatient);

    @Query (nativeQuery = true,value ="select tristesse as sentiment, count(*) as count from (select * from suivi sv where patient_email=:idPatient order by sv.date desc limit 30)  t  group by t.patient_email, tristesse " +
            "having t.patient_email=:idPatient ; ")
    List<ISuivi> getTristesse(@Param("idPatient") String idPatient);

    @Query (nativeQuery = true,value ="select fatigue as sentiment, count(*) as count from (select * from suivi sv where patient_email=:idPatient order by sv.date desc limit 30)  t  group by t.patient_email, fatigue " +
            "having t.patient_email=:idPatient ; ")
    List<ISuivi> getFatigue(@Param("idPatient") String idPatient);

    @Query (nativeQuery = true,value ="select sommeil as sentiment, count(*) as count from (select * from suivi sv where patient_email=:idPatient order by sv.date desc limit 30)  t  group by t.patient_email, sommeil " +
            "having t.patient_email=:idPatient ; ")
    List<ISuivi> getSommeil(@Param("idPatient") String idPatient);

    @Query (nativeQuery = true,value ="select stress as sentiment, count(*) as count from (select * from suivi sv where patient_email=:idPatient order by sv.date desc limit 30)  t  group by t.patient_email, stress " +
            "having t.patient_email=:idPatient ; ")
    List<ISuivi> getStress(@Param("idPatient") String idPatient);
}




