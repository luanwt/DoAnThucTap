package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import com.minhluan.backend.entity.User;

import com.minhluan.backend.service.UserService;


import java.util.List;
    
@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/users")
public class UserController{
    private UserService UserService;
    // Create User REST API

@PostMapping

public ResponseEntity<User> createUser(@RequestBody User User) {
User savedUser = UserService.createUser(User);
return new ResponseEntity<>(savedUser, HttpStatus.CREATED);


}
// Get User by id REST API

// http://localhost:8080/api/Users/1

@GetMapping("{id}")

public ResponseEntity<User> getUserById(@PathVariable("id") Long UserId) {
User User = UserService.getUserById(UserId);
return new ResponseEntity<>(User, HttpStatus.OK);
}
// Get All Users REST API

// http://1ocalhost:8080/api/Users

@GetMapping

public ResponseEntity<List<User>> getAllUsers() {

    
List<User> users = UserService.getAllUsers();
HttpHeaders headers= new HttpHeaders();
headers.add("Content-Range","items 0-"+users.size()+"/" +users.size());
return ResponseEntity.ok().headers(headers).body(users);


}
// Update User REST API 
@PutMapping("{id}")
// http://localhost:8080/api/Users/1
public ResponseEntity<User> updateUser(@PathVariable("id") Long UserId,
@RequestBody User User) {
User.setId(UserId);
User updatedUser = UserService.updateUser(User);
return new ResponseEntity<>(updatedUser, HttpStatus.OK);
}
// Delete User REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteUser(@PathVariable("id") Long UserId) {
UserService.deleteUser(UserId);
return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
}
}