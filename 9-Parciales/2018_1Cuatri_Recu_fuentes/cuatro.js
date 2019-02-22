function mostrar()
{
    var importe1,importe2, importe3, importe4, preciofinal,descuento1,descuento2,descuento3;

    importe1=prompt("ingresar su 1º importe");
    importe2=prompt("ingresar su 2º importe");
    importe3=prompt("ingresar su 3º importe");
    importe4=prompt("ingresar su 4º importe");

    importe1=parseInt(importe1);
    importe2=parseInt(importe2);
    importe3=parseInt(importe3);
    importe4=parseInt(importe4);
    preciofinal=parseInt(preciofinal);

    preciofinal=importe1+importe2+importe3+importe4

    descuento1=preciofinal*10/100
    descuento2=preciofinal*5/100
    recarga3=preciofinal*15/100

    if(preciofinal>100){
        preciofinal=preciofinal-descuento1
        alert("su descuento es del 10%, su precio es de "+preciofinal)
    }
    else
    {
        if(preciofinal>50){
            preciofinal=preciofinal-descuento2
            alert("su descuento es del 5%, su precio es de "+preciofinal)
        }
        else
        {
            preciofinal=preciofinal+recarga3
            alert("su recarga es del 15%, su precio es de " +preciofinal)
        }
    }

    if(importe1>importe2 && importe3 && importe4){
        alert("el 1º importe es el mayor")

    }
    else
    {
        if(importe2>importe1 && importe3 && importe4){
            alert("el 2º importe es el mayor")
        }
        else
        {
            if(importe3>importe1 && importe2 && importe4){
                alert("el 3º importe es el mayor")
            }else
            {
                if(importe4>importe1&&importe2&&importe3){
                    alert("el 4º importe es el mayor")
                }
                else
                {
                    if(importe1==importe2&&importe3<importe4){
                        alert("el 1º importe es igual al 2º importe y al 3º importe")
                    }
                else
                {
                    if(importe1==importe2&&importe3==importe4){
                        alert("todos los importes son iguales")
                    }
                }

                }
            
                
                
            }
        }
        
    }
}
