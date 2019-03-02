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
    var flagpesomax=false
    var contadortepmmenos0=0;
    var contadorpeso=0;
    var acumuladorpeso=0;
    var maxmarca=0;
   
   
    pesomin=0
    contadordetemp=0
    pesomax=0
    respuesta="s"



    while(respuesta!="no")
    {
        marca=prompt("ingrese marca");
        peso=prompt("ingrese peso");
        while(peso<1 || peso >100)
        {
            peso=prompt("ingrese nuevamente el peso");
        /*validacion*/
        }
        temperatura=prompt("ingrese temperatura")
        while(temperatura<-30||temperatura>30)
        {
            temperatura=prompt("ingrese nuevamente la temperatura");
        }
        /*validacion*/
        if(temperatura % 2 == 0)
        {
            contadordetemp=contadordetemp+1
        }
        if(flagpesomax==false || peso>pesomax)
        {
            pesomax=marca;
            pesomax=peso;
            flagpesomax=true;
        }
        if(flagpesomax==false|| peso<pesomin)
        {
            pesomin=peso;
            flagpesomax=true
        }
        if(temperatura<0)
        {
            contadortepmmenos0++;
        }
        contadorpeso++;
        acumuladorpeso++;







        respuesta=prompt("ingrese no para salir");
    }
    promedio=acumuladorpeso/contadorpeso
        
document.write(" cantidad de temperaturas pares "+contadordetemp)
document.write(" el producto maximo es" +maxmarca)
document.write(" cantidad de productos a menos de 0" +contadortepmmenos0)
document.write(" el promedio total es " +promedio)
document.write(" el maximo peso es " +pesomax+ " y el minimo es " +pesomin)




}
