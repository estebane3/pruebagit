function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;
    var mensaje
//alert (laHora);
    laHora=parseInt(laHora)
    switch(laHora)
    {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        mensaje=("de la mañana");
        break;

        default:
        mensaje="no es de la mañana"
        break
    }
        alert(mensaje)
	
	



}//FIN DE LA FUNCIÓN