var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor')
});

// Escuchar información
socket.on('disconnect',function(){
    console.log('Perdimos conexion con el ervidor')
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Robert',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respuesta server: ',resp)
});

// Escuhar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje)
})
