interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle;
}

interface Detalle {
    autor: string;
    year: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'la gota fria',
    detalles: {
        autor: 'carlos vives',
        year: 1990, 
    }
}


const { volumen, segundo, cancion, detalles} = reproductor;
const {autor, year} = detalles;

/* console.log('El volumen actual: ', volumen)
console.log('El segundo actual: ', segundo)
console.log('El cancion actual: ', cancion)
console.log('El autor actual: ', autor)
console.log('El year actual: ', year) */

const dbz: string[] = ['Goku', 'vegeta', 'trunks'];

const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1: ', p1 );
console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3);



 