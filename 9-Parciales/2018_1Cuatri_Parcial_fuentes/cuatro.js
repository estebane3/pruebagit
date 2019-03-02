function mostrar()
{
    var numero1;
    var numero2;
    var suma;

    numero1=prompt("ingrese el primer numero");
    numero2=prompt("ingrese su segundo numero");

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    if(numero1==numero2)
    {
        alert(numero1+""+numero2);

    }
    else
    {
        if(numero1>numero2)
        {
            alert(numero1-numero2);
        }
        else
        {
            suma=numero2+numero1
            alert(suma);
            if(suma>10)
            {
                alert("la suma es " + suma + " y supero el 10")
            }
        }
    }
}
