export class Medicamento
{
    constructor(id,nombre,precio,stock)
    {
        this.id=id;
        this.nombre= nombre;
        this.precio=precio;
        this.stock=stock;
    }

     setStock(cantidad)
    {
        this.stock += cantidad;
    }

    getStock()
    {
        return this.stock;
    }

    mostrarDetalles()
    {
        console.log("ID: ",this.id);
        console.log("Nombre: ",this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ",this.stock);
    }
}