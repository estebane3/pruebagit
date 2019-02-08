/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero1;
    var Descuento;
    var RESULTADO;

    numero1=document.getElementById("importe").value;

    numero1=parseInt(numero1);

    Descuento=numero1*0.25

    RESULTADO=numero1-Descuento
    document.getElementById("resultado").value=RESULTADO;

}
