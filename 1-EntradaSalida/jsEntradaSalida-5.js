/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var dato;
    dato=document.getElementById("elNombre").value;


    var edad
    edad=document.getElementById("laEdad").value;
    edad=parseInt(edad);
    alert("usted se llama " +dato+ " y tiene "+ edad+ " años");


}

