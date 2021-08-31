import { calculaISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'telefono1',
        precio: 100,
    },
    {
        desc: 'telefono2',
        precio: 150
    }
];


const [isv, total] = calculaISV(carritoCompras);

console.log('total: ', total)
console.log('isv', isv);
