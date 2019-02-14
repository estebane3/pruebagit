function mostrar()
{
//tomo la edad  

    var edad
    edad=document.getElementById("edad").value;

    if(edad>=18){
        alert("mayor de edad")

    }
    else
    {
        if (edad>=13) {
            alert("es adolescente")        
        } else {
            if(edad<13)
            alert("es niño")
          
        }
    }  





}
  //FIN DE LA FUNCIÓN