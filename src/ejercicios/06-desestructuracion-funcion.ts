export interface Producto {
    desc: string,
    precio: number,

}

const telefono: Producto = {
    desc: 'Nokia N-Gage',
    precio: 150,
}

const tablet: Producto = {
    desc: 'Ipad air',
    precio: 300,
}

export function calculaISV(productos: Producto[]): [number, number] {
    
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    })

    return [total * 0.19, total] ;

}

const articulos = [telefono, tablet];

const [isv, total] = calculaISV(articulos);

console.log('ISV: ', isv);
console.log('total: ', total);