import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  busqueda:string = '';

  images = [
    "../assets/img1.webp",
    "../assets/img2.webp",
    "../assets/img3.webp",
    "../assets/img4.webp"
  ]

  productos = [
    {
      imagenUrl:"../assets/oculus quest 2.webp",
      nombre:"Meta Oculus Quest 2 128 Gb Auriculares De Realidad Virtual",
      precio:"U$S 570,01",
      tipoEnvio:"Envío gratis",
      id:"01"
    },
    {
      imagenUrl:"../assets/Tablet Samsung S6.webp",
      nombre:"Tablet Samsung S6 Lite 4 Gb Ram 64 Gb Incluye Spen 4g Lte",
      precio:"U$S 440,01",
      tipoEnvio:"Pago",
      id:"02"
    },
    {
      imagenUrl:"../assets/Laptop Gaming Hp Victus.webp",
      nombre:"Laptop Gaming Hp Victus 15-fa0031dx 8gb Ram 512gb Intel I5",
      precio:"U$S 920,02",
      tipoEnvio:"Envío gratis",
      id:"03"
    },
    {
      imagenUrl:"../assets/Audifonos.webp",
      nombre:"Audifonos Trust Gxt 322b Carus Gaming Con Microfono",
      precio:"U$S 18",
      tipoEnvio:"Envío gratis",
      id:"04"
    },
    {
      imagenUrl:"../assets/Samsung Galaxy Tab S7 Fe.webp",
      nombre:"Samsung Galaxy Tab S7 Fe. Sm-t735. 4gb/64gb Wi-fi Lte 12,4'",
      precio:"U$S 590",
      tipoEnvio:"Pago",
      id:"05"
    }
  ]

  productos2 = [
    {
      imagenUrl:"../assets/panel_decorativo.webp",
      nombre:"Panel Decorativo 3d Para Pared Autoadhesivo",
      precio:"U$S 3,50",
      tipoEnvio:"Envío gratis",
      id:"06"
    },
    {
      imagenUrl:"../assets/mueble1.webp",
      nombre:"Muebles Modular Piscis Chaise Longue Alta Calidad Fabrica",
      precio:"U$S 820",
      tipoEnvio:"Pago",
      id:"07"
    },
    {
      imagenUrl:"../assets/comedor.webp",
      nombre:"Juego De Sillas P/comedor Rattan 4 Puestos Marrón Tejido",
      precio:"U$S 201,30",
      tipoEnvio:"Pago",
      id:"08"
    },
    {
      imagenUrl:"../assets/ceramica.webp",
      nombre:"Cerámicas Baldosas Para Piso/paredes 45x45 Sidus De 1ra",
      precio:"U$S 25/caja",
      tipoEnvio:"Pago",
      id:"09"
    },
    {
      imagenUrl:"../assets/fregadero.webp",
      nombre:"Fregadero Doble Ponchera Aquafina 48x84 (sin Griferia)",
      precio:"U$S 45,04",
      tipoEnvio:"Envío gratis",
      id:"10"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
