function mostrar()
{

	var contador;
	var numeromaximo;
	var numerominimo;
	var respuesta;
	var numeroingresado;
	var bandera

	// declarar variables
	numeromaximo=-9999;
	numerominimo=9999;
	contador=0;
	respuesta="si";

	bandera=0;
	
	
	while(respuesta!='no')

	{
		numeroingresado=prompt("ingrese numero");
		numeroingresado=parseInt(numeroingresado);
		if(bandera==0)
		 {
			 numeromaximo=numeroingresado;
			 numerominimo=numeroingresado;
			 bandera=1;
		 }else
		 {
			if( numeroingresado>numeromaximo)
			{
				numeromaximo=numeroingresado;
			}
			if( numeroingresado<numerominimo)
			{
				numerominimo=numeroingresado;
			}
		 }
		

		
		respuesta=prompt("ingrese no para salir","escribe aqui");
	
	}
	console.log("el maximo es: " +numeromaximo);
	console.log("el minimo es: " +numerominimo);




}//FIN DE LA FUNCIÓN