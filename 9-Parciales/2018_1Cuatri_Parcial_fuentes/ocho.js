function mostrar()
//Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y
// un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
//a) La cantidad de números pares. 
//b) La cantidad de números impares. 
//c) La cantidad de ceros. 
//d) El promedio de todos los números positivos ingresados. 
//e) La suma de todos los números negativos. 
//f) El número y la letra del máximo y el mínimo.


{
    var numero;
    var letra;
    var respuesta;
    var contador_numeropares=0;
    var contador_numeroimpares=0;
    var cantidad_ceros=0;
    var promedio_positivos=0;
    var numero_positivo=0;
    var cantidad_numerospositivos=0
    var numero_negativo=0;
    var bandera=0;
    var numeromax=0;
    var letramax;
    var bandera2=0;
    var numeromin=0;
    var letramin;

    respuesta="si"

    
    while(respuesta!="no")
    {
        numero=prompt("ingrese un numero"); //ingreso del numero
        while(numero<-100 || numero>100)    //validacion del numero
        {
            numero=prompt("numero invalido, ingrese nuevamente un numero")
        }
        letra=prompt("ingrese una letra"); //ingreso de la letra
        numero=parseInt(numero);
        

        if(numero % 2==0)                                      //numeros pares
        {
            contador_numeropares=contador_numeropares+1

        }
        else                                                   //numeros impares
        {
          contador_numeroimpares=contador_numeroimpares+1
        }
        if(numero==0)                                          //cantidad de ceros
        {
            cantidad_ceros=cantidad_ceros+1;
        }
        if(numero>=0)   //promedio numeros positivos
        {
            numero_positivo=numero_positivo+numero
            
            cantidad_numerospositivos=cantidad_numerospositivos+1
        }
        if(numero<0)    //suma de negativos
        {
            numero_negativo=numero+numero_negativo;


        }
        if(bandera==0)
        {
            numeromax=numero;
            letramax=letra;
            bandera=1;
        }
        else
        {
            if(numero>numeromax)
            {
                numeromax=numero;
                letramax=letra;
            }
        }
        if(bandera2==0)
        {
            numeromin=numero;
            letramin=letra;
            bandera2=1;
        }
        else
        {
            if(numero<numeromin)
            {
                numeromin=numero;
                letramin=letra;
            }
        }


        


        respuesta=prompt("escribe /no/ para salir"); //terminar ciclo
    }

        promedio_positivos=numero_positivo/cantidad_numerospositivos;
    
        document.write("la cantidad de numeros impares es " +contador_numeroimpares);
         document.write("la cantidad de numeros pares es " +contador_numeropares);
         document.write("la cantidad de ceros es " +cantidad_ceros);
         document.write("el promedio de numeros positivos es " +promedio_positivos);
         document.write("la suma de los negativos es " +numero_negativo);
         document.write("el numero maximo es " +numeromax+" y su letra es "+letramax+ " y el numero minimo es " +numeromin+ " y su letra es " +letramin);
        

}
