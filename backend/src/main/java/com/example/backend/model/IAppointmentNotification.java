package com.example.backend.model;

import java.sql.Date;

public interface IAppointmentNotification {

    Date getDate();
    String getNom();
    String getPrenom();
    String getIdPatient();
    String getIdDoctor();
}
