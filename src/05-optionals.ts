export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number //los parametros opcionales van al final.
) => {
  return {
    id,
    stock: stock ?? 10, //no utilicemos el operador || porque tomara los valores como falso
    isNew: isNew ?? true
  }
}

//0 === false
//'' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
