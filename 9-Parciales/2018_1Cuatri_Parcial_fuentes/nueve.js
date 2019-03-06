function mostrar()
//Bienvenidos. 
//Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
//la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
//a) La cantidad de temperaturas pares. 
//b) La marca del producto más pesado 
//c) La cantidad de productos que se conservan a menos de 0 grados. 
//d) El promedio del peso de todos los productos.	
//f) El peso máximo y el mínimo.
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contadordetemp;
    var promedio;
    var pesomax;
    var pesomin;
    var flagpesomax=false;
    var contadortepmmenos0;
    var contadorpeso;
    var acumuladorpeso;
    var marcamaxima;
    var flagpesomin=false;
    var sumapeso=0

    pesomin=0
    contadordetemp=0
    pesomax=0
    respuesta="s"
    contadorpeso=0
    acumuladorpeso=0
    marcamaxima=0
    contadortepmmenos0=0



    while(respuesta!="no")
    {
        marca=prompt("ingrese marca");
        peso=prompt("ingrese peso");
        temperatura=prompt("ingrese temperatura")
        peso=parseInt(peso);
        temperatura=parseInt(temperatura);
        /*validacion*/
        while(peso<1 || peso >100)
        {
            peso=prompt("ingrese nuevamente el peso");
        /*validacion*/
        }
        while(temperatura<-30||temperatura>30)
        {
            temperatura=prompt("ingrese nuevamente la temperatura");
        }
        if(temperatura % 2 == 0)
        {
            contadordetemp=contadordetemp+1
        }


        if(flagpesomax==false || peso>pesomax)
        {
            pesomax=peso;
            marcamaxima=marca;
            flagpesomax=true;
        }
        if(flagpesomin==false|| peso<pesomin)
        {
            pesomin=peso;
            flagpesomin=true;
        }
        if(temperatura<0)
        {
            contadortepmmenos0++;
        }
        contadorpeso=contadorpeso+1;
        
        respuesta=prompt("ingrese no para salir");
        sumapeso=sumapeso+peso;
        acumuladorpeso=acumuladorpeso+1;
        
    }
        promedio=sumapeso/acumuladorpeso;



        
document.write(" cantidad de temperaturas pares "+contadordetemp)
document.write(" la marca del producto mas pesado es " +marcamaxima)
document.write(" cantidad de productos a menos de cero grados es " +contadortepmmenos0)
document.write(" el promedio total es " +promedio)
document.write(" el maximo peso es " +pesomax+ " y el minimo es " +pesomin)




}
