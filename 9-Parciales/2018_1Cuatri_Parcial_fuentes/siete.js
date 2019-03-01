function mostrar()
{
    var notas;
    var cantidaddenotas
    var sexo;
    var promedionotas;
    var respuestas;
    var varonesaprobados

    notas=0
    sexo= "femenino","masculino"
    promedionotas=0
    cantidaddenotas=0
    varonesaprobados=0
   

    while(respuestas !="no")
    {
        notas=prompt("ingrese notas");
        sexo=prompt("ingresar el sexo ");
        notas=parseInt(notas);


        if(notas>=6 && sexo=="m"){
            varonesaprobados=varonesaprobados+1
            
            notas=notas+1;
        }
        if(notas<6){
            notas=notas+1;

        }
        if(cantidaddenotas>=6)
        {
            cantidaddenotas=1
        }

		respuestas=prompt("ingrese no para salir");


    }
    promedionotas=notas/cantidaddenotas
 
    alert("el promedio de las notas es " +promedionotas)
    alert("la nota mas baja es " +notas+ " y su sexo es " +sexo)
    alert("cantidad de varones aprobados" +varonesaprobados)
}
