var billete = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,50,50,50,50,50,50,50,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,10,5,5,5,5,5,5];
var dinero_cajero = billete.map(element => {
    return element * 1000;
});
let suma_dinero_cajero = dinero_cajero.reduce((acc,valor) => acc += valor);
console.log(suma_dinero_cajero);


let billetesDe100 = [];
let billetesDe50 = [];
let billetesDe20 = [];
let billetesDe10 = [];
let billetesDe5 = [];

let cantidad_retirar = document.querySelector('#cantidad-Retirar');
let retirar = document.querySelector('#enviar');
let bandeja = document.querySelector('.bandeja');
let contenedor_infor = document.querySelector('.contenedor-info');


retirar.onclick = () => {
    retirarCajero();
    billetesEntregados();
};

function retirarCajero () {
    bandeja.textContent = "";
    var dineroRetirado = 0;
    var dineroFaltante = cantidad_retirar.value;
    var dividido_10 = dineroFaltante/10000;
    var dividido_5 = dineroFaltante/5000;
if(Number.isInteger(cantidad_retirar.value / 5) || Number.isInteger(cantidad_retirar.value / 10)) {
    console.log("cantidad divisible entre Diez o Cinco")
}
    if(cantidad_retirar.value < suma_dinero_cajero){
        let dividido_100 = dineroFaltante/100000;
        if(dividido_100 >= 1){
            let numeroRedondeado = Math.floor(dividido_100);
            dineroFaltante -= numeroRedondeado * 100000;
            dineroRetirado += numeroRedondeado * 100000;
            suma_dinero_cajero -= dineroRetirado;
            for (let i = 0; i < numeroRedondeado; i++) {
                billetesDe100.push(100000);
            }
        }
        if (dineroRetirado !== cantidad_retirar.value) {
            let dividido_50 = dineroFaltante/50000;
            if (dividido_50 >= 1) {
                let numeroRedondeado = Math.floor(dividido_50);
                dineroFaltante -= numeroRedondeado * 50000;
                dineroRetirado += numeroRedondeado * 50000;
                suma_dinero_cajero -= dineroRetirado;
                for (let i = 0; i < numeroRedondeado; i++) {
                    billetesDe50.push(50000);
                }
            }
        }
        if (dineroRetirado !== cantidad_retirar.value) {
            var dividido_20 = dineroFaltante/20000;
            if (dividido_20 >= 1) {
                let numeroRedondeado = Math.floor(dividido_20);
                dineroFaltante -= numeroRedondeado * 20000;
                dineroRetirado += numeroRedondeado * 20000;
                suma_dinero_cajero -= dineroRetirado;
                for (let i = 0; i < numeroRedondeado; i++) {
                    billetesDe20.push(20000);
                }
            }
        }
        if (dineroRetirado !== cantidad_retirar.value) {
            let dividido_10 = dineroFaltante/10000;
            if (dividido_10 >= 1) {
                let numeroRedondeado = Math.floor(dividido_10);
                dineroFaltante -= numeroRedondeado * 10000;
                dineroRetirado += numeroRedondeado * 10000;
                suma_dinero_cajero -= dineroRetirado;
                for (let i = 0; i < numeroRedondeado; i++) {
                    billetesDe10.push(10000);
                }
            }
        }
        if (dineroRetirado !== cantidad_retirar.value) {
            let dividido_5 = dineroFaltante/5000;
            if (dividido_5 >= 1) {
                let numeroRedondeado = Math.floor(dividido_5);
                dineroFaltante -= numeroRedondeado * 5000;
                dineroRetirado += numeroRedondeado * 5000;
                suma_dinero_cajero -= dineroRetirado;
                for (let i = 0; i < numeroRedondeado; i++) {
                    billetesDe5.push(5);
                }
            }
        }
        // console.log(dineroFaltante);
        // console.log(dineroRetirado);
        // console.log(suma_dinero_cajero);
        // console.log(billetesDe100, billetesDe50, billetesDe20, billetesDe10, billetesDe5);
    }
    else {
        contenedor_infor.innerHTML = '<h1 class="InsuficienteDinero">No hay suficiente dinero, por favor vuelva más tarde.</h1>';
    }
}

let fragment = document.createDocumentFragment();

function billetesEntregados () {
    if(billetesDe100.length > 0) {
        for(i=0; i < billetesDe100.length; i++){
            let img = document.createElement("IMG");
            img.setAttribute("src", "Billetes/Billete de 100 mil.jpg");
            img.classList.add("billete");
            fragment.appendChild(img);
        }
    }
    if(billetesDe50.length > 0) {
        for(i=0; i < billetesDe50.length; i++){
            let img = document.createElement("IMG");
            img.setAttribute("src", "Billetes/Billete de 50 mil.jpg");
            img.classList.add("billete");
            fragment.appendChild(img);
        }
    }
    if(billetesDe20.length > 0) {
        for(i=0; i < billetesDe20.length; i++){
            let img = document.createElement("IMG");
            img.setAttribute("src", "Billetes/Billete de 20 mil.jpg");
            img.classList.add("billete");
            fragment.appendChild(img);
        }
    }
    if(billetesDe10.length > 0) {
        for(i=0; i < billetesDe10.length; i++){
            let img = document.createElement("IMG");
            img.setAttribute("src", "Billetes/Billete de 10 mil.jpg");
            img.classList.add("billete");
            fragment.appendChild(img);
        }
    }
    if(billetesDe5.length > 0) {
        for(i=0; i < billetesDe5.length; i++){
            let img = document.createElement("IMG");
            img.setAttribute("src", "Billetes/Billete de 5 mil.jpg");
            img.classList.add("billete");
            fragment.appendChild(img);
        }
    }
    bandeja.appendChild(fragment);
    billetesDe100 = [];
    billetesDe50 = [];
    billetesDe20 = [];
    billetesDe10 = [];
    billetesDe5 = [];
}