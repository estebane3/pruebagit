function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;
   
    precio=prompt("ingrese su precio");
    descuento=prompt("ingrese el descuento");
    precio=parseFloat(precio);
    descuento=parseInt(descuento);

    preciofinal=precio-(precio*descuento/100)

    document.getElementById("elPrecioFinal").value=preciofinal

    
   
   
    
   
}
