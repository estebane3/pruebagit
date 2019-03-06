function mostrar()
{
    var velocidadkm;
    var tipo_combustible;
    var vehiculos;
    var sumadevelocidades;
    var promedio;
    var bandera;
    var velocidad_baja;
    var combustiblemin;
    var contador_combustible;
    var velocidadalta;

    velocidadalta=0
    contador_combustible=0
    velocidad_baja=0;
    combustiblemin=0
    bandera=0;
    sumadevelocidades=0;
    velocidadkm=0;
    tipo_combustible=0;
    vehiculos=0;
    tipo_combustible="s","l";

    while(vehiculos<5) 
    {
        velocidadkm=prompt("ingrese la velocidad");
        velocidadkm=parseInt(velocidadkm);
        while(velocidadkm<0 || velocidadkm>250)
        {
            velocidadkm=prompt("velocidad invalida, ingrese nuevamente la velocidad");  //validacion
        }
        tipo_combustible=prompt("ingrese su tipo de combustible /s/ /l/");
        while(tipo_combustible!="s" && tipo_combustible!="l")
        {
            tipo_combustible=prompt("combustible invalido, ingrese nuevamente ");
        }
        if(velocidadkm>=0)
        {
            sumadevelocidades=sumadevelocidades+velocidadkm;
        }
        if(bandera==0)
        {
            velocidad_baja=velocidadkm;
            combustiblemin=tipo_combustible;
            bandera=1
        }
        else
        if(velocidadkm<velocidad_baja)
        {
            velocidad_baja=velocidadkm;
            combustiblemin=tipo_combustible;
        }
        if(tipo_combustible=="l" && velocidadkm>100)
        {
            contador_combustible=contador_combustible+1

        }
        if(velocidadkm>velocidadalta && tipo_combustible=="s")
        {
            velocidadalta=velocidadkm;
        }


        
        vehiculos++;

    }
    
    promedio=sumadevelocidades/5;




alert("el promedio es "+promedio);
alert("la velocidad mas baja es " +velocidad_baja+ "y su combustible es " +combustiblemin);
alert("cantidad de combustibles liquidos que superan 100 km " +contador_combustible)
alert("la velocidad mas alta del combustible solido es " +velocidadalta)

}
    

    

