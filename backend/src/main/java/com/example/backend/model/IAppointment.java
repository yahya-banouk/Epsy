package com.example.backend.model;

import java.sql.Date;

public interface IAppointment {
    Date getDate();
    String getNom();
    String getPrenom();
    String getStatus();
}
