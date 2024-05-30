package com.minhluan.backend.service;

import com.minhluan.backend.entity.Role;
import java.util.List;

public interface RoleService {
    public Role createRole(Role Role);
    public Role getRoleById(Long RoleId);
    public List<Role> getAllRoles();
    public Role updateRole(Role Role);
    public Role deleteRole(Long RoleId);
}
