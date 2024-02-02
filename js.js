// checkea si esta bien vinculada la hoja
console.log('ready')

// utilizar defer o async en la carga de la hoja en html, para que no existan problemas en la carga del eventlistener.
// usar queryselector por id, escuchar el clic e indicar funcion a utilizar.


document.querySelector('#recuperar').addEventListener('click', funcion);

function funcion(){
  console.log('recuperar')

//declaramos constante para instanciar el request para acceder a sus metodos
  const httpRequest = new XMLHttpRequest();

//usamos el metodo open para acceder a la ruta del archivo JSON, GET para obtener, ruta del archivos json y confirmamos con true que sea asincrono
httpRequest.open('GET', 'contacts.json', true )

//enviamos la peticion (request)
httpRequest.send()

//conseguimos respuesta (res), con el metodo onready, 
httpRequest.onreadystatechange = function(){

  //a traves de una funcion donde corroboramos los estados del estado de la conexion. 
  if(this.readyState == 4 && this.status == 200){
    //obtenemos la informacion del archivo JSON, en formato de texto.
    console.log(this.responseText)
    //parseamos lo recuperado en texto y lo transformamos para ser trabajado como JSON, dentro de la funcion parse usamos el this.responseText (transforma el texto en array de objetos)
    let datos = JSON.parse(this.responseText)
    console.log(datos)

    //accedemos a los valores del array con un bucle for
   for(let items of datos){
      console.log(items.artist)
    }

  }
}



}




document.querySelector('#poto').addEventListener('click', funcion1);

function funcion1(){
  console.log('poto')

}

