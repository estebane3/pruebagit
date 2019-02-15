function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random()*(11-1))+1
	alert(nota)
	
	if(nota==9 || nota==10){

		alert("excelente");
	}
	else
	{

		if(nota>4){

			alert("aprobado");

		}
		else{
			if(nota<4);
			alert("vamos,la proxima se puede");


		}

	}

		
	

}//FIN DE LA FUNCIÓN