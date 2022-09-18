
create user 'user'@'%' identified by 'root';
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;
--
-- creation des tables
--
-- table doctor
--
DROP TABLE IF EXISTS  doctor ;
CREATE TABLE IF NOT EXISTS  doctor  (
   email  varchar(250) NOT NULL,
   cin  varchar(255) DEFAULT NULL,
   nom  varchar(255) DEFAULT NULL,
   password  varchar(255) DEFAULT NULL,
   prenom  varchar(255) DEFAULT NULL,
   specialite  varchar(255) DEFAULT NULL,
   tel  varchar(255) DEFAULT NULL,
  PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


-- table patient

DROP TABLE IF EXISTS  patient ;
CREATE TABLE IF NOT EXISTS  patient  (
                                         email  varchar(250) NOT NULL,
                                         cin  varchar(255) DEFAULT NULL,
                                         date_naissance  varchar(255) DEFAULT NULL,
                                         nom  varchar(255) DEFAULT NULL,
                                         password  varchar(255) DEFAULT NULL,
                                         prenom  varchar(255) DEFAULT NULL,
                                         sex  varchar(255) DEFAULT NULL,
                                         situation  varchar(255) DEFAULT NULL,
                                         tel  varchar(255) DEFAULT NULL,
                                         PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- table suivi

DROP TABLE IF EXISTS  suivi ;
create table suivi
(
    id            int auto_increment
        primary key,
    date          date     null,
    fatigue       varchar(255) null,
    sommeil       varchar(255) null,
    stress        varchar(255) null,
    tristesse     varchar(255) null,
    patient_email varchar(255) null,
    constraint FKj1q6e9n3px158f4b969q8sprf
        foreign key (patient_email) references patient (email)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- table patientof

DROP TABLE IF EXISTS  patientof ;
CREATE TABLE IF NOT EXISTS  patientof  (
                                           date_debut  date DEFAULT NULL,
                                           patient_email  varchar(255) NOT NULL,
                                           doctor_email  varchar(255) NOT NULL,
                                           KEY  FK2hpxqwlfddgytdqgfdtkkupnm  ( patient_email ),
                                           KEY  FK3kksk5r0jopd4m76bhlg4pfyp  ( doctor_email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- table rendez-vous


DROP TABLE IF EXISTS  rendez_vous ;
CREATE TABLE IF NOT EXISTS  rendez_vous  (
                                             date  date DEFAULT NULL,
                                             is_confirmed  bit(1) DEFAULT NULL,
                                             patient_email  varchar(255) NOT NULL,
                                             doctor_email  varchar(255) NOT NULL,
                                             KEY  FKdrr6evor45tggpjp20ohmiyg1  ( doctor_email ),
                                             KEY  FK9uaah7guos1xbqxgdg0i0qquy  ( patient_email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- table admin

DROP TABLE IF EXISTS  admin ;
CREATE TABLE IF NOT EXISTS  admin  (
                                       email  varchar(255) NOT NULL,
                                       password  varchar(255) NOT NULL,

                                       PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- table user

DROP TABLE IF EXISTS  user ;
CREATE TABLE IF NOT EXISTS  user  (
                                      password  varchar(255) DEFAULT NULL,
                                      role  varchar(255) DEFAULT NULL,
                                      username  varchar(255) NOT NULL,
                                      UNIQUE KEY  UK_sb8bbouer5wak8vyiiy4pf2bx  ( username )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


-- Contraintes pour la table  patientof
ALTER TABLE  patientof
    ADD CONSTRAINT  FK2hpxqwlfddgytdqgfdtkkupnm  FOREIGN KEY ( patient_email ) REFERENCES  patient  ( email ),
    ADD CONSTRAINT  FK3kksk5r0jopd4m76bhlg4pfyp  FOREIGN KEY ( doctor_email ) REFERENCES  doctor  ( email );

--
-- Contraintes pour la table  rendez_vous
--
ALTER TABLE  rendez_vous
    ADD CONSTRAINT  FK9uaah7guos1xbqxgdg0i0qquy  FOREIGN KEY ( patient_email ) REFERENCES  patient  ( email ),
    ADD CONSTRAINT  FKdrr6evor45tggpjp20ohmiyg1  FOREIGN KEY ( doctor_email ) REFERENCES  doctor  ( email );


-- TRIGGERS

DROP TRIGGER IF EXISTS  DoctorTableDeleteTrigger ;

CREATE TRIGGER  DoctorTableDeleteTrigger  AFTER DELETE ON  doctor  FOR EACH ROW delete from user
where user.username=old.email;



DROP TRIGGER IF EXISTS  PatientTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTableUpdateTrigger  AFTER UPDATE ON  patient  FOR EACH ROW BEGIN
    update user
    set user.username=new.email ,user.password=new.password
    where user.username=old.email;
end $$

DELIMITER ;

DROP TRIGGER IF EXISTS  PatientTabledeleteTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTabledeleteTrigger  AFTER DELETE ON  patient  FOR EACH ROW BEGIN
    delete from user
    where user.username=old.email;
end $$

DELIMITER ;
DROP TRIGGER IF EXISTS  DoctorTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  DoctorTableUpdateTrigger  AFTER UPDATE ON  doctor  FOR EACH ROW BEGIN
    update user
    set user.username=new.email ,user.password=new.password
    where user.username=old.email;
end $$

DELIMITER ;

DROP TRIGGER IF EXISTS  AdminTableDeleteTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableDeleteTrigger  AFTER DELETE ON  admin  FOR EACH ROW BEGIN
    delete from user
    where user.username=old.email;
end $$

DELIMITER ;

DROP TRIGGER IF EXISTS  AdminTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableUpdateTrigger  AFTER UPDATE ON  admin  FOR EACH ROW BEGIN
    update user
    set user.username=new.email,
        user.password=new.password
    where user.username=old.email;
end $$

DELIMITER ;
DROP TRIGGER IF EXISTS  addPatientOf ;
DELIMITER $$
CREATE TRIGGER  addPatientOf  AFTER UPDATE ON  rendez_vous  FOR EACH ROW BEGIN
DECLARE cpt int DEFAULT 0;
DECLARE newpatientemail VARCHAR(255) DEFAULT new.patient_email;
DECLARE newdoctoremail VARCHAR(255) DEFAULT new.doctor_email;
    IF(old.is_Confirmed=false and new.is_confirmed=true) then
        select count(*) into cpt from patientof pf group by pf.patient_email,pf.doctor_email
        having pf.patient_email=newpatientemail and pf.doctor_email=newdoctoremail;
        if(cpt=0) then insert into patientof(patientof.doctor_email,patientof.patient_email,patientof.date_debut) values(new.doctor_email,new.patient_email,new.date);
        end if;
    end if;
END $$

DELIMITER ;


DROP TRIGGER IF EXISTS  AdminTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableInsertTrigger  AFTER INSERT ON  admin  FOR EACH ROW BEGIN
    insert into user(username,password,role) values(new.email,new.password,'admin');
END $$
DELIMITER ;
DROP TRIGGER IF EXISTS  DoctorTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  DoctorTableInsertTrigger  AFTER INSERT ON  doctor  FOR EACH ROW BEGIN insert into user(username,password,role) values(new.email,new.password,'doctor');
end $$

DELIMITER ;
 

DROP TRIGGER IF EXISTS  PatientTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTableInsertTrigger  AFTER INSERT ON  patient  FOR EACH ROW BEGIN
insert into user(username,password,role) values(new.email,new.password,'patient');
end $$

DELIMITER ;


DROP TRIGGER IF EXISTS  deleteDoctor ;
DELIMITER $$
CREATE TRIGGER  deleteDoctor BEFORE DELETE ON doctor FOR EACH ROW begin
delete from patientof where doctor_email=old.email;
delete from rendez_vous where doctor_email=old.email;
end $$

DROP TRIGGER IF EXISTS  deletePatient $$
CREATE TRIGGER deletePatient BEFORE DELETE ON patient FOR EACH ROW begin
delete from patientof where patient_email=old.email;
delete from suivi where patient_email=old.email;
delete from rendez_vous where patient_email=old.email;
end $$


-- PROCEDURE ---------

CREATE PROCEDURE acceptAppointment(IN idDoctor varchar(250), IN idPatient varchar(250), IN date date)
BEGIN
    update rendez_vous
    set rendez_vous.is_confirmed=true
    where rendez_vous.doctor_email=idDoctor and rendez_vous.patient_email=idPatient and rendez_vous.date=date;
end $$


CREATE PROCEDURE  denyAppointment  (IN  idDoctor  VARCHAR(250), IN  idPatient  VARCHAR(250), IN  date  DATE)  BEGIN
    delete from rendez_vous
    where rendez_vous.doctor_email=idDoctor and rendez_vous.patient_email=idPatient and rendez_vous.date=date;
end $$

DELIMITER ;


CREATE PROCEDURE findPatientOfByIdPatient  (IN  idPatient  VARCHAR(250))  select pf.* from patientof pf
                                                                          where pf.patient_email=idPatient;

DELIMITER $$
CREATE PROCEDURE getAppointmentCountByDoctor(IN idDoctor varchar(250))
BEGIN
    select count from (select year(rv.date) as year, month(rv.date)as month,count(*) as count from rendez_vous rv, doctor d where d.email=rv.doctor_email group by d.email, year(rv.date), month(rv.date), rv.is_confirmed having d.email=idDoctor and rv.is_confirmed=true) t where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE  getAppointmentGrowthByDoctor(IN idDoctor varchar(250))
BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(rv.date) as year, month(rv.date) as month,count(*) as cpt from doctor d, rendez_vous rv
                                 where d.email=rv.doctor_email and d.email=idDoctor
                                 group by year(rv.date), month(rv.date) , rv.is_confirmed
                                 having rv.is_confirmed=true
                                 order by year(rv.date), month(rv.date) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE  getInvitationCountByDoctor(IN idDoctor varchar(250))
BEGIN select count from (select year(rv.date) as year, month(rv.date)as month,count(*) as count from rendez_vous rv, doctor d where d.email=rv.doctor_email group by d.email, year(rv.date), month(rv.date), rv.is_confirmed having d.email=idDoctor and is_confirmed=false) t where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE getInvitationGrowthByDoctor(IN idDoctor varchar(250))
BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(rv.date) as year, month(rv.date) as month,count(*) as cpt from doctor d, rendez_vous rv
                                 where d.email=rv.doctor_email and d.email=idDoctor
                                 group by year(rv.date), month(rv.date)
                                 having rv.is_confirmed=false
                                 order by year(rv.date), month(rv.date) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE  getLatestAppointmentByDoctor(IN idDoctor varchar(250))
BEGIN
    select rv.date as date, p.nom as nom, p.prenom as prenom, rv.is_confirmed as status from rendez_vous rv, doctor d, patient p
    where d.email=rv.doctor_email and rv.patient_email=p.email and d.email=idDoctor and rv.is_confirmed=true order by rv.date desc limit 4;
end $$

CREATE PROCEDURE  getPatientCountByDoctor(IN idDoctor varchar(250))
BEGIN
    select count from (select year(pf.date_debut) as year, month(pf.date_debut)as month,count(*) as count from patientof pf, doctor d where d.email=pf.doctor_email group by d.email, year(pf.date_debut), month(pf.date_debut) having d.email=idDoctor) t where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE getPatientCountChartByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select year, month , (cpt+(lag(cpt) over (order by year, month))) as patientCount from (select year(pf.date_debut) as year, month(pf.date_debut) as month ,count(*) as cpt from patientof pf, doctor d
                                                                                            where d.email=pf.doctor_email and d.email=idDoctor
                                                                                            group by year(pf.date_debut), month(pf.date_debut)
                                                                                           ) t
    order by year, month DESC
    limit 9;
end $$



CREATE PROCEDURE getPatientGrowthByDoctor(IN idDoctor varchar(250))
BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(pf.date_debut) as year, month(pf.date_debut) as month,count(*) as cpt from doctor d, patientof pf
                                 where d.email=pf.doctor_email and d.email=idDoctor
                                 group by year(pf.date_debut), month(pf.date_debut)
                                 order by year(pf.date_debut), month(pf.date_debut) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$

CREATE PROCEDURE getRendezVousNotificationByDoctor(IN idDoctor varchar(250))
BEGIN
    select rv.date as date, p.nom as nom, p.prenom as prenom,
           p.email as idPatient, d.email as idDoctor from rendez_vous rv, patient p, doctor d
    where rv.patient_email=p.email and rv.doctor_email= d.email
      and d.email=idDoctor and rv.is_confirmed=false;
end $$
DELIMITER ;

CREATE PROCEDURE saveAppointment(IN idDoctor varchar(250), IN idPatient varchar(250), IN date date)
insert into rendez_vous(rendez_vous.doctor_email, rendez_vous.patient_email,rendez_vous.date,rendez_vous.is_confirmed) values(idDoctor,idPatient,date, false);



CREATE PROCEDURE saveAssesement(IN fatigue varchar(255), IN sommeil varchar(255),
                                                IN stress varchar(255), IN tristesse varchar(255),
                                                IN idPatient varchar(255))
insert into suivi(date, fatigue,sommeil,stress,tristesse,patient_email) values(sysdate(),fatigue,sommeil, stress, tristesse, idPatient);


-- INSERTION DES DONNEES

INSERT INTO  doctor  ( email ,  cin ,  nom ,  password ,  prenom ,  specialite ,  tel ) VALUES
                                                                                            ('doctor@miola.com', 'AA00', 'Zaglami', '$2a$10$Kg2.Wv06RynePbMzYASvYO.gADyCGFWcfa/ZdUuA17uHp.kLxXDpa', 'Fatimzahra', 'psychologue', '0789098767'),
                                                                                            ('doctor2@miola.com', 'AA99', 'Boutarkha', '$2a$10$Kg2.Wv06RynePbMzYASvYO.gADyCGFWcfa/ZdUuA17uHp.kLxXDpa', 'Hiba', 'psychologue', '06565437922'),
                                                                                            ('doctor3@miola.com', 'AA76', 'Moussaoui', '$2a$10$ijQ2naRyVBJQm1lGj9g8pu9k1pzqS/kU/6QEJy7xzdbRj4C5VI4K2', 'Walid', 'psychologue', '07828292072');

INSERT INTO  patient  ( email ,  cin ,  date_naissance ,  nom ,  password ,  prenom ,  sex ,  situation ,  tel ) VALUES
                                                                                                                     ('patient@miola.com', 'AB98', '2000-06-12', 'Moufid', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Nadir', 'Male', 'Single', '0654342367'),
                                                                                                                     ('patient1@miola.com', 'AD23', '1999-06-12', 'Benani', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Amal', 'Female', 'Divorced', '0789985465'),
                                                                                                                     ('patient2@miola.com', 'AK91', '1990-06-12', 'Ouali', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Ahlam', 'Female', 'Married', '0645321864'),
                                                                                                                     ('patient4@miola.com', 'KO90','2011-06-12', 'Berada', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Mehdi', 'Male', 'Single', '0678976546'),
                                                                                                                     ('patient5@miola.com', 'BB12', '1995-06-12', 'Namer', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Salim', 'Male', 'Single', '0635784312'),
                                                                                                                     ('patient3@miola.com', 'AJ75', '1987-06-12', 'Tijani', '$2a$10$3UzL5oCioAMexHJQIIuKr.0kst1le63paMC/.hUVx81Z7RjfvEXq6', 'Bouchra', 'Female', 'Single', '0789097908');



INSERT INTO  patientof  ( date_debut ,  patient_email ,  doctor_email ) VALUES
                                                                            ('2022-07-08', 'patient@miola.com', 'doctor@miola.com'),
                                                                            ('2022-07-09', 'patient5@miola.com', 'doctor2@miola.com'),
                                                                            ('2022-06-09', 'patient4@miola.com', 'doctor2@miola.com'),
                                                                            ('2022-06-22', 'patient3@miola.com', 'doctor@miola.com'),
                                                                            ('2022-07-04', 'patient1@miola.com', 'doctor@miola.com'),
                                                                            ('2022-07-22', 'patient2@miola.com', 'doctor@miola.com');


INSERT INTO  rendez_vous  ( date ,  is_confirmed ,  patient_email ,  doctor_email ) VALUES
                                                                                        ('2022-07-22', b'1', 'patient1@miola.com', 'doctor@miola.com'),
                                                                                        ('2022-07-20', b'0', 'patient2@miola.com', 'doctor@miola.com');
INSERT INTO suivi (date, fatigue, sommeil, stress, tristesse, patient_email) values ('2022-07-01','Moyennement','Un peu','Pas du tout','Un peu','patient@miola.com'),
                                                                                    ('2022-07-02','Un peu','Beaucoup','Moyennemet','Extremement','patient@miola.com'),
                                                                                    ('2022-07-03','Beaucoup','Un peu','Pas du tout','Pas du tout','patient@miola.com'),
                                                                                    ('2022-07-04','Moyennement','Moyennemnt','Extremement','Moyennemnt','patient@miola.com'),
                                                                                    ('2022-07-05','Extremement','Un peu','Moyennemet','Extremement','patient@miola.com');

INSERT INTO admin values ('admin@miola.com','$2a$10$t/MhHZt.HU8Ny3us/NU7kOzOKMn99XooD4oqgw1CbccgkKtHin.Z.');
COMMIT;

