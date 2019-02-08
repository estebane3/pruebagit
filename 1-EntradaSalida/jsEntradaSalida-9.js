/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var numero1;
    var aumento;
    var RESULTADO;

    numero1=document.getElementById("sueldo").value;

    numero1=parseInt(numero1);

    aumento=numero1*0.1

    RESULTADO=aumento+numero1
    document.getElementById("resultado").value=RESULTADO;




    

}
