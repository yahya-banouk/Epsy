package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Doctor;
import com.example.backend.repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*" )
@RestController
@RequestMapping("/api/v1/doctors")
public class DoctorController {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private DoctorRepo doctorRepo;

    //get all doctors
    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctorRepo.findAll();
    }

    //create doctor rest api
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){
        Doctor savedDoctor = doctor;
        String newpassword = encoder.encode(doctor.getPassword());
        savedDoctor.setPassword(newpassword);
        return doctorRepo.save(savedDoctor);
    }

   //get doctor by email
   @GetMapping("/{email}")
public ResponseEntity<Doctor> getDoctorById(@PathVariable String email){
Doctor doctor = doctorRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("Doctor not found"));

    return ResponseEntity.ok(doctor);
   }
   //update doctor

    @PutMapping("/{email}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable String email, @RequestBody Doctor doctorDetails){
        Doctor doctor = doctorRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("Doctor not found"));

        doctor.setNom(doctorDetails.getNom());
        doctor.setPrenom(doctorDetails.getPrenom());
        doctor.setCin(doctorDetails.getCin());
        doctor.setSpecialite(doctorDetails.getSpecialite());
        doctor.setPassword(doctorDetails.getPassword());
        doctor.setTel(doctorDetails.getTel());
        //doctor.setEmail(doctorDetails.getEmail()); we can't change it because it's our id

        Doctor updatedDoctor = doctorRepo.save(doctor);
        return ResponseEntity.ok(updatedDoctor);
    }
    // delete doctor
    @DeleteMapping("/{email}")
    public ResponseEntity<Map<String, Boolean>> deleteDoctor(@PathVariable String email){
        Doctor doctor = doctorRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("doctor not exist with id :" + email));

        doctorRepo.delete(doctor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/name/{nom}")
    public List<Doctor> getDoctorByFullName(@PathVariable String nom ){

        return doctorRepo.findDoctorByFullname(nom);
    }
}