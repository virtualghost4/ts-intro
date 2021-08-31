

console.log('Hola Mundo!!!!!!');

/*
    ===== Código de TypeScript =====
*/


function sumar(a:number , b:number): number{
    return a + b;
}

const sumarFlecha = (a:number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLOR{

    nombre: string;
    pv: number;
    mostrarHP:() => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{

    personaje.pv += curarX;    
}

const nuevoPersonaje: PersonajeLOR = {

    nombre: 'ale',
    pv: 50,
    mostrarHP() {
        console.log('puntos de vida HP: ', this.pv)
    }
}
 
curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHP();