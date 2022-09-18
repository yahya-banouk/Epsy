package com.example.backend.controller;

import com.example.backend.model.MyUserDetails;
import com.example.backend.service.PatientOfService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class PatientOfController {
    @Autowired
    private PatientOfService service;

    @GetMapping("/hasDoctor")
    public ResponseEntity<String> hasDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idPatient = user.getUsername();
        Boolean hasDoctor = service.hasDoctor(idPatient);
        JSONObject json = new JSONObject();
        if(hasDoctor) {
            json.put("hasDoctor",true);
            return new ResponseEntity<String>(json.toString(), HttpStatus.OK);
        }
        json.put("hasDoctor",false);
        return new ResponseEntity<String>(json.toString(), HttpStatus.OK);
    }
}
