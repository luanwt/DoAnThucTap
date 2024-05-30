package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.minhluan.backend.entity.Role;

import com.minhluan.backend.service.RoleService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/roles")
public class RoleController{
    private RoleService RoleService;
    // Create Role REST API

@PostMapping

public ResponseEntity<Role> createRole(@RequestBody Role Role) {
Role savedRole = RoleService.createRole(Role);
return new ResponseEntity<>(savedRole, HttpStatus.CREATED);


}
// Get Role by id REST API

// http://1ocalhost:8080/api/Roles/1

@GetMapping("{id}")

public ResponseEntity<Role> getRoleById(@PathVariable("id") Long RoleId) {
Role Role = RoleService.getRoleById(RoleId);
return new ResponseEntity<>(Role, HttpStatus.OK);
}
// Get All Roles REST API

// http://1ocalhost:8080/api/Roles

@GetMapping

public ResponseEntity<List<Role>> getAllRoles() {
List<Role> roles = RoleService.getAllRoles();
HttpHeaders headers= new HttpHeaders();
headers.add("Content-Range","items 0-"+roles.size()+"/" +roles.size());
return ResponseEntity.ok().headers(headers).body(roles);
}
// Update Role REST API
@PutMapping("{id}")
// http://localhost:8080/api/Roles/1
public ResponseEntity<Role> updateRole(@PathVariable("id") Long RoleId, 
@RequestBody Role Role) {
Role.setId(RoleId);
Role updatedRole = RoleService.updateRole(Role);
return new ResponseEntity<>(updatedRole, HttpStatus.OK);
}
// Delete Role REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteRole(@PathVariable("id") Long RoleId) {
RoleService.deleteRole(RoleId);
return new ResponseEntity<>("Role successfully deleted!", HttpStatus.OK);
}
}