function mostrar()
{

	var contador=0;
	var numeroingresado
	var numeronegativo
	var numeropositivo
	var cantidaddepositivos
	var cantidaddenegativos
	var cantidaddeceros
	var cantidaddenumeropares
	var promediopositivos
	var promedionegativos
	var diferenciaposneg
	//declarar contadores y variables 
	
	var respuesta="si";
	numeronegativo=0
	numeropositivo=0
 	cantidaddepositivos=0;
	cantidaddenegativos=0;
	cantidaddeceros=0
	cantidaddenumeropares=0
	promedionegativos=0
	promediopositivos=0

	while(respuesta!="no")
	{
		numeroingresado=prompt("ingrese numero");
		numeroingresado=parseInt(numeroingresado);

		if(numeroingresado<0){
			numeronegativo=numeronegativo+numeroingresado

			cantidaddenegativos=cantidaddenegativos+1;
		}
		if(numeroingresado>0){
			numeropositivo=numeropositivo+numeroingresado

			 cantidaddepositivos=cantidaddepositivos+1;


		}
		if(numeroingresado==0)
		{
			cantidaddeceros=cantidaddeceros+1;
		}
		if(numeroingresado %2 ==0 && numeroingresado !=0)
		{
			cantidaddenumeropares=cantidaddenumeropares+1;
		}


		respuesta=prompt("ingrese no para salir","escribe aqui");
	}
	
		promediopositivos=numeropositivo/cantidaddepositivos
		promedionegativos=numeronegativo/cantidaddenegativos
		diferenciaposneg=numeropositivo+numeronegativo


console.log("la suma de negativos es " +numeronegativo)
console.log("la suma de positivos es " +numeropositivo)
console.log("la cantidad de positivos es " +cantidaddepositivos)
console.log("la cantidad de negativos es " +cantidaddenegativos)
console.log("la cantidad de ceros es " +cantidaddeceros)
console.log("la cantidad de numeros pares es " +cantidaddenumeropares)
console.log("el promedio negativo es " +promedionegativos)
console.log("el promedio positivo es " +promediopositivos)
console.log("la diferencia del negativo y el positivo es " +diferenciaposneg)







}