function formsMain() {
    const data = {
        name: '',
        onClick: function () {
            if (this.name) {
                console.log(this.name);
            }
            setTimeout(() => {
                this.name = 'Francisco'
            },1000);
        }
    };

    return data;
}



function formulario() {
    return {
        persona:{},
        sendForm: function(){
            console.log({...this.persona});
        }

    }
}