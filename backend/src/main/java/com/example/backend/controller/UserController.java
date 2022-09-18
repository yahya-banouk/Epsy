package com.example.backend.controller;
import com.example.backend.model.MyUserDetails;
import com.example.backend.model.Patient;
import com.example.backend.repository.PatientRepo;
import com.example.backend.repository.UserRepo;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000" , allowCredentials = "true")
public class UserController {
    private static Logger log = LoggerFactory.getLogger(UserController.class);

    

    @Autowired
    private PatientRepo patientRepository;

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody Patient patient) {
        log.info("UserController : register");
        JSONObject jsonObject = new JSONObject();

        if (userRepository.findByUsername(patient.getEmail()) == null) {
            patient.setPassword(encoder.encode(patient.getPassword()));
            Patient savedUser = patientRepository.save(patient);
            jsonObject.put("message", savedUser.getEmail() + " saved succesfully");
            return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
        }
        return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/home")
    public ResponseEntity<String> home(Authentication auth) {
        MyUserDetails myUserDetails = (MyUserDetails) auth.getPrincipal();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("role", myUserDetails.getAuthorities());
        return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
    }

}
