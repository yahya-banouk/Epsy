package com.example.backend.service;

import com.example.backend.model.*;
import com.example.backend.repository.PatientRepo;
import com.example.backend.repository.RendezVousRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RendezVousService {

    @Autowired
    private RendezVousRepo rendezVousRepo;

    @Autowired
    private PatientRepo patientRepo;


    public List<IAppointmentNotification> getRendezVousNotificationByDoctor(String idDoctor){
        return rendezVousRepo.getRendezVousNotificationByDoctor(idDoctor);
    }

    public List<ICount> getAppointmentCountByDoctor(String idDoctor){
        return rendezVousRepo.getAppointmentCountByDoctor(idDoctor);
    }

    public List<IGrowthPercentage> getAppointmentGrowthByDoctor(String idDoctor){
        List<IGrowthPercentage> growth = rendezVousRepo.getAppointmentGrowthByDoctor(idDoctor);
        if(growth.get(0)==null) {
            Percentage percentage = new Percentage();
            percentage.setPercentage(BigDecimal.valueOf(0));
            growth.clear();
            growth.add(percentage);
        }
        return growth;
    }

    public List<ICount> getInvitationCountByDoctor(String idDoctor){
        return rendezVousRepo.getInvitationCountByDoctor(idDoctor);
    }

    public List<IGrowthPercentage> getInvitationGrowthByDoctor(String idDoctor){
        List<IGrowthPercentage> growth = rendezVousRepo.getInvitationGrowthByDoctor(idDoctor);
        if(growth.get(0)==null) {
            Percentage percentage = new Percentage();
            percentage.setPercentage(BigDecimal.valueOf(0));
            growth.clear();
            growth.add(percentage);
        }
        return growth;
    }

    public List<IAppointment> getLatestAppointmentByDoctor(String idDoctor){
        return rendezVousRepo.getLatestAppointmentByDoctor(idDoctor);

    };

    public void denyAppointment(Appointment appointment){
        rendezVousRepo.denyAppointment(appointment.getIdDoctor(),appointment.getIdPatient(),appointment.getDate());
    }

    public void acceptAppointment(Appointment appointment){
        rendezVousRepo.acceptAppointment(appointment.getIdDoctor(),appointment.getIdPatient(),appointment.getDate());
    }
    public void addRendezVous(Appointment appointment){
        rendezVousRepo.saveAppointment(appointment.getIdDoctor(),appointment.getIdPatient(),appointment.getDate());
    }

}
