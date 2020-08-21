import { RolesObject, Role } from "./types"

const supportedRoles = require("./Data/supportedRoles.json")

export function initializeRoleObject() {
    return supportedRoles.reduce((rolesObject: RolesObject, role: Role) => {
        return {
            ...rolesObject,
            [role]: 0
        }
    }, {} as RolesObject);
}