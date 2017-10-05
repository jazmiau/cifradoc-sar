function request(option){
  //preguntar por opción a elegir
  //por medio de do se repite la pregunta hasta obtener respuesta válida
    do{
        var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
        if(respuesta != ""){
            if(respuesta == "1") {
                cifrar();
            } else if (respuesta == "2") {
                descifrar();
// de no ingresar una opción válida arroja mensaje de alerta
            } else {
                alert("Ingrese una opción válida");
            }
        }
    } while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}
//funcion que cifra la posicion en el código ASCII
function cifrar(){
    var codeOne= prompt("Ingrese la palabra que desea cifrar");
//var vacía donde irá el indice buscado
    var cifrado= ""
    for(var i= 0; i< codeOne.length; i++)



}
//por medio de la posicion en el codigo ASCII saber la posicion en el alfabeto normal
function descifrar(){
    var codeTwo=prompt("Ingrese la palabra que desea descifrar");
    //aquí iriía esa parte
}
request();
