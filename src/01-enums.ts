//las ventajas del enum es que es una forma mas directa de saber cuales son las opciones que puedes asignar en un a variable.

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string;
  role: ROLES;
}

const juanUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}
