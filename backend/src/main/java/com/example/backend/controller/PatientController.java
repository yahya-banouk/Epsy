package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.*;
import com.example.backend.repository.PatientRepo;
//import com.example.backend.service.IPatientService;
import com.example.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*" )
@RequestMapping("/patients")
@RestController
public class PatientController {

    @Autowired
    PatientService service;
    @Autowired
    PatientRepo patientRepo;
    @Autowired
    private PasswordEncoder encoder;

   // private final IPatientService patientService;

  //  public PatientController(IPatientService patientService) {
   //     this.patientService = patientService;
  //  }

    //patient list of doc
    @GetMapping("/patientof")
    public List<Patient> getPatientOf(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        List<Patient> patients = service.findPatientByDoctor(idDoctor);
        System.out.println(idDoctor+"dazt");
        return patients;
    }

    //search doc's patient by name or lastname
    @GetMapping("/search/{fullname}")
    public List<Patient> findPatientOfByName(@PathVariable String fullname,Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.findPatientByFullname(idDoctor,fullname);
    }

    //patient counts for current month
    @GetMapping("/patientcount")
    public List<ICount> getPatientCountByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getPatientCountByDoctor(idDoctor);
    }

    //patient count increase(positive,negative)
    @GetMapping("/patientgrowth")
    public List<IGrowthPercentage> getPatientCountGrowthByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getPatientGrowthByDoctor(idDoctor);
    }

    //4 new joined patients
    @GetMapping("/newpatients")
    public List<Patient> newJoinedPatientsByDoctor(Authentication auth){

        MyUserDetails user = (MyUserDetails) auth.getPrincipal();

        String idDoctor = user.getUsername();
        System.out.println("id doctor hna" + idDoctor);
        System.out.println(service.getNewJoinedPatientsByDoctor(idDoctor).size());
        return service.getNewJoinedPatientsByDoctor(idDoctor);
    }

    //
    @GetMapping("/patientcountchart")
    public List<IPatientCountChartPoint> getLatestAppointmentByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getPatientCountChartByDoctor(idDoctor);
    }
    //get all patients
    @GetMapping
    public List<Patient> getAllPatients(){
        return patientRepo.findAll();
    }

    //add patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient){
        Patient savedPatient = patient;
        String newpassword = encoder.encode(patient.getPassword());
        savedPatient.setPassword(newpassword);
        return patientRepo.save(savedPatient);
    }

    //get patient by email
    @GetMapping("/{email}")
    public ResponseEntity<Patient> getPatientById(@PathVariable String email){
        Patient patient = patientRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("Patient not found"));

        return ResponseEntity.ok(patient);
    }
    //update patient

    @PutMapping("/{email}")
    public ResponseEntity<Patient> updatePatient(@PathVariable String email, @RequestBody Patient patientDetails){
        Patient patient = patientRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("patient not found"));

        patient.setNom(patientDetails.getNom());
        patient.setPrenom(patientDetails.getPrenom());
        patient.setCin(patientDetails.getCin());
        patient.setSex(patientDetails.getSex());
        patient.setPassword(patientDetails.getPassword());
        patient.setSituation(patientDetails.getSituation());
        patient.setDateNaissance(patientDetails.getDateNaissance());
        patient.setTel(patientDetails.getTel());
        Patient updatedPatient = patientRepo.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }
    // delete patient
    @DeleteMapping("/{email}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable String email){
        Patient patient = patientRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("patient not exist with id :" + email));

        patientRepo.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("/profile")
    public Patient getProfile(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idPatient = user.getUsername();
        return service.getProfile(idPatient);
    }
}
