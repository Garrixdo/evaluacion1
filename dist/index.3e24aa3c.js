class Cl_vehiculo {
    constructor(placa, tipo){
        this.placa = placa;
        this.tipo = tipo;
    }
    tarifa() {
        let tar = 0;
        if (this.tipo === 1) tar = 10;
        else if (this.tipo === 2) tar = 20;
        else tar = 50;
        return tar;
    }
}
class Cl_peaje {
    constructor(){
        this.contTipo1 = this.contTipo2 = this.contTipo3 = this.contVehiculo = this.acumTarifa = 0;
    }
    procesarVehiculo(v) {
        if (v.tipo === 1) this.contTipo1++;
        else if (v.tipo === 2) this.contTipo2++;
        else this.contTipo3++;
        this.contVehiculo++;
        this.acumTarifa += v.tarifa();
    }
    porcTipo1() {
        return this.contTipo1 / this.contVehiculo * 100;
    }
    porcTipo2() {
        return this.contTipo2 / this.contVehiculo * 100;
    }
    porcTipo3() {
        return this.contTipo3 / this.contVehiculo * 100;
    }
    totalMunicipio() {
        return this.acumTarifa * 0.4;
    }
}
let vehiculo1 = new Cl_vehiculo(123, 1);
let vehiculo2 = new Cl_vehiculo(234, 2);
let vehiculo3 = new Cl_vehiculo(345, 3);
let vehiculo4 = new Cl_vehiculo(456, 2);
let vehiculo5 = new Cl_vehiculo(567, 1);
let peaje = new Cl_peaje();
peaje.procesarVehiculo(vehiculo1);
peaje.procesarVehiculo(vehiculo2);
peaje.procesarVehiculo(vehiculo3);
peaje.procesarVehiculo(vehiculo4);
peaje.procesarVehiculo(vehiculo5);
salida = document.getElementById("app");
salida.innerHTML = "Resultados:";
salida.innerHTML += `<br>Placa ${vehiculo1.placa}: Tipo ${vehiculo1.tipo}: Tarifa Bs.${vehiculo1.tarifa()}`;
salida.innerHTML += `<br>Placa ${vehiculo2.placa}: Tipo ${vehiculo2.tipo}: Tarifa Bs.${vehiculo2.tarifa()}`;
salida.innerHTML += `<br>Placa ${vehiculo3.placa}: Tipo ${vehiculo3.tipo}: Tarifa Bs.${vehiculo3.tarifa()}`;
salida.innerHTML += `<br>Placa ${vehiculo4.placa}: Tipo ${vehiculo4.tipo}: Tarifa Bs.${vehiculo4.tarifa()}`;
salida.innerHTML += `<br>Placa ${vehiculo5.placa}: Tipo ${vehiculo5.tipo}: Tarifa Bs.${vehiculo5.tarifa()}`;
salida.innerHTML += "<br>";
salida.innerHTML += `<br>Porcentaje Tipo de Vehiculos: Particulares ${peaje.porcTipo1()}%, Transporte ${peaje.porcTipo2()}%, Carga ${peaje.porcTipo3()}%`;
salida.innerHTML += `<br>Total para Municipio: Bs.${peaje.totalMunicipio()}`;

//# sourceMappingURL=index.3e24aa3c.js.map
