let input_nombre = document.querySelector('.container__inputs-nombre');
let input_edad = document.querySelector('.container__inputs-edad');
let input_delitos = document.querySelector('.container__inputs-delitos');
let select = document.querySelector('.container__inputs__busqueda__select');
let examinar = document.querySelector('.examinar');
let respuesta = document.querySelector('.Respuesta')

examinar.addEventListener('click', () => {
    let probabilidad = 0;
    let resultado;

    probabilidad =+ input_delitos.value * 10;
    if (select.value === "true") probabilidad = probabilidad + 10;
    if (input_edad.value < 18 && input_edad.value > 0) probabilidad -= 5;

    if(probabilidad <= 30) resultado = `<b class="green">${probabilidad}%</b>`;
    else if (probabilidad > 30 && probabilidad <= 60) resultado = `<b class="yellow">${probabilidad}%</b>`;
    else resultado = `<b class="red">${probabilidad}%</b>`;

    respuesta.innerHTML = `La persona <b>${input_nombre.value}</b> con la edad de <b>${input_edad.value}</b> tiene la probabilidad del ${resultado} de cometer el hurto </br>`;
})