//Arreglos de objetos tipo persona
const personas = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara'),
    new Persona('Maria','Juarez')
];

function mostrarPersonas(){
    console.log("Mostrar personas");
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto; //Envio la cadena con la variable texto al elemento con el id personas
}

function agregarPersona(){
    const forma = document.forms['forma'] //Recuperamos el formulario en la variable forma
    const nombre = forma['nombre']; //Recuperamos todo el elemento de tipo input con el id de nombre del formulario
    const apellido = forma['apellido']; //Recuperamos todo el elemento de tipo input con el id de apellido del formulario
    //Validacion
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value); //Accedemos a los valores de esos elementos
        console.log(`Persona añadida: ${persona.nombre} ${persona.apellido}`);
        personas.push(persona); //Le enviamos ese nuevo objeto de tipo persona al array de personas
        mostrarPersonas();//Volvenos a a llamar al metodo
    }else{
        alert("No hay informacion que agregar");
    }

}