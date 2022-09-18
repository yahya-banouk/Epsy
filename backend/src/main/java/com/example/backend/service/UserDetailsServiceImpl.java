package com.example.backend.service;

import com.example.backend.model.MyUserDetails;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepo userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user ==null)
        {

            System.out.println("user not found");
            throw new UsernameNotFoundException("User Not Found");
        }
        System.out.println(user.getUsername()+""+user.getPassword());

        return new MyUserDetails(user);
    }

}
