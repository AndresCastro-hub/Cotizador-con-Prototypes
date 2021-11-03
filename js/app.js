
function Seguro (marca,año,tipo){
    this.marca = marca
    this.año = año
    this.tipo = tipo
}

function userInterface (){

}

userInterface.prototype.llenarOpciones = () => {

    const max = new Date().getFullYear(),

    min = max - 20

    const selectAño = document.querySelector('#year')

    for(let i = max; i > min ; i--){
        let option = document.createElement('option')
        option.value = i
        option.textContent = i
        selectAño.appendChild(option)
    }

}

userInterface.prototype.mostrarMensaje =  (mensaje,tipo) => {

    const div = document.createElement('div')

    if(tipo === 'error'){
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje

    const formulario = document.querySelector('#cotizar-seguro')

    formulario.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(() => {
        div.remove()
    }, 3000);

}

const ui = new userInterface()

console.log(ui)

document.addEventListener('DOMContentLoaded', () =>{
    ui.llenarOpciones();
})

//Validacion del Formulario

eventListeners()

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro')

    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault()

   //Leer la marca seleccionada

   const marca = document.querySelector('#marca').value

    //Leer el tipo de año

    const year = document.querySelector('#year').value

   //Leer el tipo de cobertura 
   
   const tipo = document.querySelector('input[name="tipo"]:checked').value

  if(marca === '' || year === '' || tipo === ''){
      ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
      return
  }

    ui.mostrarMensaje('Cotizando', 'exito')

}