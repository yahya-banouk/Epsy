package com.example.backend.controller;

import com.example.backend.model.*;
import com.example.backend.repository.SuiviRepo;
import com.example.backend.service.SuiviService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/suivi")
public class SuiviController {

    @Autowired
    private SuiviRepo suiviRepo;

    @Autowired
    private SuiviService service;

    @PostMapping
    public void addSuivi(@RequestBody Assesement suivi, Authentication auth ){

        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idPatient = user.getUsername();
        suivi.setIdPatient(idPatient);

         suiviRepo.assesement(

                suivi.getFatigue(),
                suivi.getSommeil(),
                suivi.getStress(),
                suivi.getTristesse(),
                suivi.getIdPatient());
    }

    @GetMapping("/getsuivi")
    List<Suivi> getSuivi(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idPatient = user.getUsername();
        return service.getSuivi(idPatient);
    }

    @GetMapping("/gettristesse")
    List<ISuivi> getTristesse(@RequestParam("email") String email,Authentication auth){
        System.out.println("email"+email);
        return service.getTristesse(email);
    }

    @GetMapping("/getsommeil")
    List<ISuivi> getSommeil(@RequestParam("email") String email,Authentication auth){

        return service.getSommeil(email);
    }

    @GetMapping("/getstress")
    List<ISuivi> getStress(@RequestParam("email") String email,Authentication auth){


        return service.getStress(email);
    }

    @GetMapping("/getfatigue")
    List<ISuivi> getFatigue(@RequestParam("email") String email,Authentication auth){
        return service.getFatigue(email);
    }

}