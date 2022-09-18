package com.example.backend.service;

import com.example.backend.model.ISuivi;
import com.example.backend.model.Suivi;
import com.example.backend.repository.SuiviRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuiviService {

    @Autowired
    private SuiviRepo repo;

    public List<Suivi> getSuivi(String idPatient){
        return repo.getSuivi(idPatient);
    }

    public List<ISuivi> getTristesse(String idPatient) {
        return repo.getTristesse(idPatient);
    }

    public List<ISuivi> getFatigue(String idPatient) {
        return repo.getFatigue(idPatient);
    }

    public List<ISuivi> getSommeil(String idPatient) {
        return repo.getSommeil(idPatient);
    }

    public List<ISuivi> getStress(String idPatient) {
        return repo.getStress(idPatient);
    }
}
