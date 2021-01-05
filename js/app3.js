function mainMouse() {
    const data = {
        onClick: function(event) {
            console.log('Detecte el click');
            console.log(event.target);
        },
        onMouseOver:function(event) {
            event.target.style.backgroundColor = 'blue',
            event.target.style.color = 'black'
        },
        onMouseOut:function(event) {
            event.target.style.backgroundColor = 'green',
            event.target.style.color = 'black'
        }
    } 

    return data;
}



function mainInputs() {
    const data2 = {
        texto: '',
        onKeyPressEnter: function(event) {
            this.texto = event.target.value;
            // alert('Pana diste enter');
        },
        onInput: function(event) {
            this.texto = event.target.value;
        }
    } 

    return data2;
}