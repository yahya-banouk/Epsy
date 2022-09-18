package com.example.backend.repository;

import com.example.backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Transactional

public interface RendezVousRepo extends JpaRepository<RendezVous, RendezVousId> {

    @Query(nativeQuery = true, value="call getRendezVousNotificationByDoctor(:idDoctor)")
    List<IAppointmentNotification> getRendezVousNotificationByDoctor(String idDoctor);

    @Query(nativeQuery = true, value = "call getLatestAppointmentByDoctor(:idDoctor)")
    List<IAppointment> getLatestAppointmentByDoctor(String idDoctor);

    @Query(nativeQuery = true, value="call getAppointmentCountByDoctor(:idDoctor);")
    List<ICount> getAppointmentCountByDoctor(String idDoctor);

    @Query(nativeQuery = true, value="call getInvitationCountByDoctor(:idDoctor);")
    List<ICount> getInvitationCountByDoctor(String idDoctor);

    @Query(nativeQuery = true, value="call getAppointmentGrowthByDoctor(:idDoctor);")
    List<IGrowthPercentage> getAppointmentGrowthByDoctor(String idDoctor);

    @Query(nativeQuery = true, value="call getInvitationGrowthByDoctor(:idDoctor);")
    List<IGrowthPercentage> getInvitationGrowthByDoctor(String idDoctor);
    @Modifying
    @Query(nativeQuery = true,value="call denyAppointment(:idDoctor,:idPatient,:date)")
    void denyAppointment(String idDoctor,String idPatient,String date);
    @Modifying
    @Query(nativeQuery = true,value="call acceptAppointment(:idDoctor,:idPatient,:date)")
    void acceptAppointment(String idDoctor,String idPatient,String date);

    @Modifying
    @Query(nativeQuery = true,value="call saveAppointment(:idDoctor,:idPatient,:date)")
    void saveAppointment(String idDoctor,String idPatient,String date);
}
