package com.example.backend.controller;


import com.example.backend.model.*;
import com.example.backend.service.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/rv")
@RestController
public class RendezVousController {

    @Autowired
    private RendezVousService service;

    //unconfirmed appointment
    @GetMapping("/rendezvous")
    public List<IAppointmentNotification> getRendezVousNotificationByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getRendezVousNotificationByDoctor(idDoctor);
    }

    //appointment count for current month
    @GetMapping("/appointmentcount")
    public List<ICount> getAppointmentCountByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getAppointmentCountByDoctor(idDoctor);
    }

    //increase for appointment count for current month
    @GetMapping("/appointmentgrowth")
    public List<IGrowthPercentage> getAppointmentGrowthByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getAppointmentGrowthByDoctor(idDoctor);
    }

    //appointment count for current month
    @GetMapping("/invitationcount")
    public List<ICount> getInvitationCountByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getInvitationCountByDoctor(idDoctor);
    }

    //increase for appointment count for current month
    @GetMapping("/invitationgrowth")
    public List<IGrowthPercentage> getInvitationGrowthByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getInvitationGrowthByDoctor(idDoctor);
    }

    //the latest 4 new appointments
    @GetMapping("/latestappointment")
    public List<IAppointment> getLatestAppointmentByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getLatestAppointmentByDoctor(idDoctor);
    }

    @PostMapping("/denyappointment")
    public void denyAppointment(@RequestBody Appointment appointment, Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        appointment.setIdDoctor(idDoctor);
        service.denyAppointment(appointment);
    }

    @PostMapping("/acceptappointment")
    public void acceptAppointment(@RequestBody Appointment appointment,Authentication auth){

        System.out.println(appointment.getDate()+' '+ appointment.getIdPatient() +' '+ appointment.getIdDoctor());
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        appointment.setIdDoctor(idDoctor);
        service.acceptAppointment(appointment);
    }

    @PostMapping("/sendAppointmentRequest")
    public ResponseEntity<String> addAppointment(@RequestBody Appointment appointment, Authentication auth){
        System.out.println("ana hna ghansiftha likom ");
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idPatient = user.getUsername();
        appointment.setIdPatient(idPatient);
        service.addRendezVous(appointment);
        return new ResponseEntity<String>("{message: appointment request sent}", HttpStatus.OK);
    }
}
