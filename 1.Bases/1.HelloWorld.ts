//*acabado escribir tsc [nombre del programa]
(() => { //Funcion anonima autoinvocada

const msg:string = 'Hola mundo';

const hero = {
    name: 'Superman',
    age: 48
}

//Erorr: hero.age='50';

function sayHello(msg:string){

    msg.charAt(5)
    
}

console.log(hero.name," ",hero.age)
console.log(msg);
})()