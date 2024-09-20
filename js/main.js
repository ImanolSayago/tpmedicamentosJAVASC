import { Medicamento } from "./Medicamento.js";    
import { Inventario } from "./Inventario.js";

import { Venta } from "./Venta.js";


let paracetamol = new Medicamento(1,"Paracetamol",1000,2);
let Ibuprofeno = new Medicamento(2,"Ibuprofeno",2000,5);
let Buscaoina = new Medicamento(3,"Buscapina",900,3);


let inventariomedicamentos = new Inventario();

inventariomedicamentos.agregarMedicamento(paracetamol);
inventariomedicamentos.agregarMedicamento(Ibuprofeno);
inventariomedicamentos.agregarMedicamento(Buscaoina);

inventariomedicamentos.actualizarStock(1,20);
inventariomedicamentos.mostrarInventario();

let ventaparacetamol = new Venta(paracetamol,30);
ventaparacetamol.registrarVenta();

inventariomedicamentos.mostrarInventario();
