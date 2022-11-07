"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdminRole = void 0;
const _01_enums_1 = require("./01-enums");
const currentUser = {
    username: 'nicobytes',
    role: _01_enums_1.ROLES.CUSTOMER
};
const checkAdminRole = (role1, role2) => {
    if (currentUser.role === role1) {
        return true;
    }
    if (currentUser.role === role2) {
        return true;
    }
    return false;
};
exports.checkAdminRole = checkAdminRole;
const res = (0, exports.checkAdminRole)(_01_enums_1.ROLES.ADMIN, _01_enums_1.ROLES.SELLER);
console.log(res);
//V2
const checkAdminRoleV2 = (...roles) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
};
const res2 = checkAdminRoleV2(_01_enums_1.ROLES.ADMIN, _01_enums_1.ROLES.SELLER, _01_enums_1.ROLES.CUSTOMER);
console.log("checkAdminRoleV2", res2);
