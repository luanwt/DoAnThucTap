
package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.Role;
import com.minhluan.backend.repository.RoleReponsitory;
import com.minhluan.backend.service.RoleService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class RoleServiceimpl implements RoleService {
    private RoleReponsitory RoleRepository;

    @Override
    public Role createRole(Role Role) {
        return RoleRepository.save(Role);
    }

    @Override
    public Role getRoleById(Long RoleId){
        Optional<Role> optionalRole = RoleRepository.findById(RoleId);
        return optionalRole.get();
    }

     @Override
    public List<Role> getAllRoles() {
        return RoleRepository.findAll();
    }

    @Override
    public Role updateRole(Role Role){
        Role existingRole = RoleRepository.findById(Role.getId()).get();
        existingRole.setName(Role.getName());

        

        Role updateRole = RoleRepository.save(existingRole);
        return updateRole;
    }

    @Override
    public Role deleteRole(Long RoleId) {
        RoleRepository.deleteById(RoleId);
        return null;
    }
}
