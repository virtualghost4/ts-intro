

console.log('Hola Mundo!!!!!!');

/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing'];

habilidades.push(true);

console.log(habilidades);

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'ghost',
    hp: 100,
    habilidades: ['bash','counter', 'healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);