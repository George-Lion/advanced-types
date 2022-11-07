import { User, ROLES } from './01-enums';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const res = checkAdminRole(ROLES.ADMIN, ROLES.SELLER);
console.log(res);


//V2
const checkAdminRoleV2 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false;
}

const res2 = checkAdminRoleV2(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log("checkAdminRoleV2", res2);
