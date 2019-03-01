function mostrar()
{
    var velocidadkm;
    var tipocombustible;
    var cantidaddeautos;
    var promediototal;
    var velocidadmasbaja;
    var velocidadalta;
    var bandera
    var velocidadmas100

    velocidadkm=0;
    cantidaddeautos=0;
    velocidadmasbaja=0
    velocidadmasbaja=0
    tipocombustible="solido","liquido";
    bandera=0
    velocidadmas100=0

    while(cantidaddeautos<5)
    {
        tipocombustible=prompt("ingrese el tipo de combustible, si es solido /s/ si es liquido /l/");
        velocidadkm=prompt("ingrese la velocidad en km");
        velocidadkm=parseInt(velocidadkm);

        if(velocidadkm>0 && velocidadkm<250)
        {
            switch (tipocombustible) {
                case "s":
                velocidadalta=velocidadalta+velocidadkm

                case "l":
                if(velocidadkm>100)
                {
                    velocidadmas100=velocidadkm
                    velocidadmas100=velocidadmas100+1
                }
                    break;
            
                default:
                    break;
            }
            if(bandera==0)
		 {
			 velocidadmasbaja=velocidadkm;
			 bandera=1;
		 }else
		 {
			if( velocidadkm<velocidadmasbaja)
			{
				velocidadmasbaja=velocidadkm;
			}
		 }

         cantidaddeautos=cantidaddeautos+1;
            
        }

    
        promediototal=velocidadkm/cantidaddeautos

        }


        alert("el promedio total de las velocidades es " +promediototal)
        alert("la velocidad mas baja es de " +velocidadmasbaja+ " y su combustible es " +tipocombustible)
        alert("la cantidad de combustibles liquidos que su velocidad supere los 100 kilometros " +velocidadmas100)
        alert("la velocidad mas alta de los combustibles solidos " +velocidadalta)
    }
    

    

