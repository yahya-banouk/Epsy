package com.example.backend.repository;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DoctorRepo extends JpaRepository <Doctor,String>{


    @Query("select d from Doctor d where concat(d.nom,' ',d.prenom) like %?1% ")
    List<Doctor> findDoctorByFullname(String fullname);
}
