// decalrara variables para vincular los objetso de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Genrando eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
e.preventDefault();

let usuarioVal = usuario.value;
let passwordVal = password.value;

if(usuarioVal == '' || passwordVal == ''){
    creaMensaje('Verifica tus campos','danger');
    return;
}

if(localStorage.getItem('usuario')){
    let objeto = JSON.parse(localStorage.getItem('usuario'));

    if( usuarioVal == objeto.user && passwordVal == objeto.pass){
        creaMensaje('Login correcto','success');
    }else{
        creaMensaje('Uusaurio Incorrecto','danger');
    }
}else{
    creaMensaje('No hay registros','danger');
}

}
