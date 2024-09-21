
let quantity = document.getElementById('cantidad');
let button = document.getElementById('generar');
let password = document.getElementById('contrasena');
let text = document.getElementById('texto');
let alert = document.getElementById('alerta');


const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

const securityPassword = {
    a: /[A-Z]/, 
    b: /[a-z]/,
    c: /[0-9]/,
    d: /[!@#$%^&*()]+/
}

function generate()
{    
    let numberEntered = parseInt(quantity.value);
    let passwordGenerated = '';

    if(quantity.value ===""){
        displayMessage("Debe ingresar un número");
        disabledbuttons();
        clean();
        return;
    }

    if(numberEntered < 6)
    {
        displayMessage("La cantidad de caracteres debe ser mayor a 6");
        alert.style.height = "4rem";
        disabledbuttons();
        clean();
        return;   
    }
    else if(numberEntered > 20){
        displayMessage("La cantidad de caracteres no puede ser mayor a 20");
        alert.style.height = "4rem";
        disabledbuttons();
        clean();
        return;   
    }

    for(let i = 0; i < numberEntered; i++)
    {
        let randomness = characterString [ Math.floor(Math.random() * characterString.length)];
        passwordGenerated += randomness;
    }
    
    password.value = passwordGenerated;

    if(securityPassword.a.test(passwordGenerated)&&securityPassword.b.test(passwordGenerated)&&securityPassword.c.test(passwordGenerated)&&securityPassword.d.test(passwordGenerated))
    {
        text.innerHTML = "Contraseña Fuerte";
        text.style.color = "green";
    }
    else {
        text.innerHTML = "Contraseña Debil" ;
        text.style.color = "#da4646";
    }
}

function clean(){
    password.value = '';
    quantity.value = '';
    text.innerHTML = '';
}

function displayMessage(message) {
    alert.innerHTML = message;
    alert.style.display = "block";  
    alert.style.backgroundColor = "#1875E8";

    setTimeout(function() {
        alert.style.display = "none";
    }, 3000);
}

function disabledbuttons() {
    button.disabled = true;
    quantity.disabled = true;

    setTimeout(function() {
        button.disabled = false;
        quantity.disabled = false;
    }, 3000);
}

function copyText() {
    let copy = password.value;

    if(copy == ""){
        displayMessage("No hay contraseña para copiar");
        return; 
    }
    else {
        displayMessage("Texto copiado exitosamente");
    }
    
    navigator.clipboard.writeText(copy)

    .then(() => {
        console.log('copied');
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

