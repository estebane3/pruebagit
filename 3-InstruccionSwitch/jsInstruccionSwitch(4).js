function mostrar()
{

    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    var mensaje

    //alert (mesDelAño);

    switch(mesDelAño)
    {
        case  "Abril":
        case  "Junio":
        case "Septiembre": 
        case  "Noviembre":
        mensaje=("tiene 30 dias")
        break;

        case "Enero":
        case "Marzo":
        case "Mayo" :
        case "Julio" :
        case "Agosto" :
        case "Octubre": 
        case "Diciembre":
        mensaje=("tiene 31 dias")
        break;

        case "Febrero":
        mensaje = ("tiene 29 dias")
        break;
    }
        
    alert (mensaje);


}
	
	



