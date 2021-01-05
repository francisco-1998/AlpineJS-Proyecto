function secondComp() {
    const data = {
        nombre: 'Juanito',
        email: 'correo@correo.com'
    }

    return data;
}




function otherComp() {
    const data2 = {
        name: null,
        start: function () {
            console.log('Usando funciones cuando se carga el componente');
            this.name = 'Sisco'    
        }
    }

    return data2;
}