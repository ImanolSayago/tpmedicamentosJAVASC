export class Inventario
{
    constructor()
    {
        this.inventario = [];
    }

    agregarMedicamento(Medicamento)
    {
        this.inventario.push(Medicamento);
    }

    mostrarInventario()
    {
        console.log("-----------INVENTARIO-------------");
        this.inventario.forEach((producto)=>
        {
            producto.mostrarDetalles();
        })
    }


    buscarMedicamento(id)
    {
        let encontrado = null;

        this.inventario.forEach((producto)=>
        {
            if(id == producto.id)
            {
                encontrado=producto;
            } 
        })
        return encontrado;
    }

    actualizarStock(id, stock)
    {
        let producto = this.buscarMedicamento(id);
        if(producto!=null)
        {
            producto.setStock(stock);
        }
        else
        {
            console.log("El producto no fue encontrado para sumar el stock");
        }
        
    }

}