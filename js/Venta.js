export class Venta
{
    constructor(medicamento,cantidad)
    {
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total= this.calculartotal();
    }

    calculartotal()
    {
        return this.medicamento.precio * this.cantidad;
    }

    registrarVenta()
    {
        if(this.medicamento.stock >= this.cantidad)
        {
            this.medicamento.stock -= this.cantidad;
            console.log("Venta registrada");
        }
        else
        {
            console.log("La venta no se puede realizar, esta tratando de comprar mas productos de los que hay en stock");
        }
        
    }
}