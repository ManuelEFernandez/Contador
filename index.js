let genteQueEntro = document.getElementById("contador");

let cuenta = 0;
const contar = () => {

    cuenta +=1;

    genteQueEntro.innerText = cuenta;
}


let genteGuardada = document.getElementById("caja-guardados");
let numerosGuardados = [];


const guardar = () => {
    
    if (numerosGuardados.length < 5) {
    numerosGuardados.push(cuenta);
    genteQueEntro.innerText = 0;
    cuenta = 0;
    genteGuardada.innerText = numerosGuardados.join (" - ");

}

else {

    genteGuardada.style.backgroundColor = "red";
    genteGuardada.style.color = "white";
    
    genteGuardada.innerText = `${genteGuardada.innerText = numerosGuardados.join (" - ")} // Límite  por día`;
    
}
}

const resetear = () => {

    genteQueEntro.innerText = 0;
    cuenta = 0;
}

const mostrarNumerosGuardados = () => console.log(numerosGuardados);

