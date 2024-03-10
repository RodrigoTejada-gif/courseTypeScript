"use strict";
//*acabado escribir tsc [nombre del programa]
(() => {
    const msg = 'Hola mundo';
    const hero = {
        name: 'Superman',
        age: 48
    };
    //Erorr: hero.age='50';
    function sayHello(msg) {
        msg.charAt(5);
    }
    console.log(hero.name, " ", hero.age);
    console.log(msg);
})();
