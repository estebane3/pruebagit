function mostrar()

//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
// el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
{
    var velocidadkm;
    var tipo_combustible;
    var vehiculos;

    tipo_combustible="s","l"

    while (vehiculos<5) 
    {
        velocidadkm=prompt("ingrese la velocidad");
        while(velocidadkm<0 || velocidadkm>250)
        {
            velocidadkm=prompt("velocidad invalida, ingrese nuevamente la velocidad");  //validacion
        }
        tipo_combustible=prompt("ingrese su tipo de combustible /s/ /l/");
        while(tipo_combustible!="s" && tipo_combustible!="l")
        {
            tipo_combustible=prompt("combustible invalido, ingrese nuevamente ");
        }
        vehiculos++;
    }
}
