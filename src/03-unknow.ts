//El problema con Any es que visual Studio Code no te notifica que la variable esta asignada .
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 1;

let isNew: boolean = anyVar; //Si redeclaramos la variable pierde el ultimo valor con el que la definimos.

anyVar. //al escribir el punto la variable no tiene ningun tipado.

//Ahora lo veremos ocn el Unknow

let otherVar: unknown;

otherVar = true;
otherVar = undefined;
otherVar = 1;

//Antes de adignar un metodo a la variable, unknow pedira  que primero se verifique el tipado.

if (typeof otherVar === 'string') {
  otherVar.toUpperCase();//en este caso luego del punto sdi tendriamos tipado para asignar a la variable un metodo.
}

//Esta es la manera de asignar un Unknow:

if (typeof otherVar === 'boolean') {
  let isNew: boolean = otherVar;
}

