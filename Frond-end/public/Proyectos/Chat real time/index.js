'use strict'

let mensajes = document.querySelector('.mensajes');
let inputMsg = document.querySelector('.escribirMensaje-input');
let btnMsg = document.querySelector('.escribirMensaje-btn');
var  mensaje = document.querySelector('.mensajes');
let ultimoMensajeEnviado = undefined;
let ultimoMensajeRecibido = undefined;

const IDBRequest = indexedDB.open('Chat', 1);

IDBRequest.addEventListener('upgradeneeded', ()=> {
    const db = IDBRequest.result;
    db.createObjectStore("Mensajes", {
        autoIncrement: true
    });
})

let documentFrament = document.createDocumentFragment();

const crearElementosDOM = (tipoMsg,msg) => {
    let div = document.createElement('DIV');
    let p = document.createElement('P');
    let span = document.createElement('SPAN')

    span.classList.add('mensaje-fecha');
    p.classList.add('mensaje');

    p.textContent = msg;

    if (tipoMsg == 'enviado') {
        div.classList.add('container-mensaje__enviado');
        p.classList.add('mensaje-enviado');
    }
    else if (tipoMsg == 'recibido') {
        div.classList.add('container-mensaje__recibido');
        p.classList.add('mensaje-recibido');
    }
    div.appendChild(p)
    div.appendChild(span)
    documentFrament.appendChild(div);
    mensajes.appendChild(documentFrament)
}

// Transacciones

const transaccion = (tipo) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("Mensajes", tipo);
    const objectStore = IDBtransaction.objectStore("Mensajes");
    return [objectStore, IDBtransaction];
}

const añadirMensaje = (Objeto) => {
    transaccion('readwrite')[0].clear();
    const transactions = transaccion('readwrite');
    transactions[0].add(Objeto);
}


let contenidoMsg = undefined;

btnMsg.addEventListener('click', ()=> {
    if (inputMsg.value !== ""){
        contenidoMsg = inputMsg.value;
        añadirMensaje(contenidoMsg);
        inputMsg.value = '';
    }
})

const leerObjetos = () => {
    const transactions = transaccion('readonly');
    const cursor = transactions[0].openCursor();
    cursor.addEventListener("success", () => {
        if(cursor.result != mensaje && cursor.result != ""){
            if(cursor.result) {
                if (contenidoMsg == cursor.result.value && ultimoMensajeEnviado != cursor.result.value) {
                    crearElementosDOM('enviado', cursor.result.value);
                    ultimoMensajeEnviado = cursor.result.value;
                }
                else if (contenidoMsg != cursor.result.value && cursor.result.value != "" && ultimoMensajeEnviado != cursor.result.value && ultimoMensajeRecibido != cursor.result.value) {
                    crearElementosDOM('recibido', cursor.result.value);
                    ultimoMensajeRecibido = cursor.result.value;
                }
                cursor.result.continue();
                contenidoMsg = "";
            }
        }
    })
}

let interval = setInterval(() => {
    leerObjetos()
}, 1000)
