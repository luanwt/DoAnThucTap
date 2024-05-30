package com.minhluan.backend.service;


import com.minhluan.backend.entity.User;
import java.util.List;


public interface UserService {
    public User createUser(User User);
    public User getUserById(Long UserId);
    public List<User> getAllUsers();
    public User updateUser(User User);
    public User deleteUser(Long UserId);

}
