
package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.User;
import com.minhluan.backend.repository.UserRepository;
import com.minhluan.backend.service.UserService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class UserServiceimpl implements UserService {
    private UserRepository UserRepository;



    @Override
    public User createUser(User User) {
        return UserRepository.save(User);
    }

    @Override
    public User getUserById(Long UserId){
        Optional<User> optionalUser = UserRepository.findById(UserId);
        return optionalUser.get();
    }

     @Override
    public List<User> getAllUsers() {
        return UserRepository.findAll();
    }

    @Override
    public User updateUser(User User){
        User existingUser = UserRepository.findById(User.getId()).get();
        existingUser.setAddress(User.getAddress());
        existingUser.setCreated_at(User.getCreated_at());
        existingUser.setDeleted(User.getDeleted());
        existingUser.setEmail(User.getEmail());
        existingUser.setFullname(User.getFullname());
        existingUser.setPassword(User.getPassword());
        existingUser.setPhone_number(User.getPhone_number());
        existingUser.setUpdated_at(User.getUpdated_at());
        existingUser.setRole(User.getRole());
        User updateUser = UserRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public User deleteUser(Long UserId) {
        UserRepository.deleteById(UserId);
        return null;
    }
}
