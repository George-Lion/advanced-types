"use strict";
//las ventajas del enum es que es una forma mas directa de saber cuales son las opciones que puedes asignar en un a variable.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
const juanUser = {
    username: 'nicobytes',
    role: ROLES.ADMIN
};
