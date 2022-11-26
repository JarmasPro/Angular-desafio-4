import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  imgid:number = 0

  productos = [
    {
      imagenUrl:[{img:"../../../assets/oculus quest 2.webp",id:0}],
      nombre:"Meta Oculus Quest 2 128 Gb Auriculares De Realidad Virtual",
      precio$:"U$S 598,50",
      precio:"Bs.6.421,91",
      tipoEnvio:"Envío gratis",
      id:"01",
      existencias:4,
      vendidos:2,
      stars:5,
      direcVendedor:"Mun. Sucre (este), Distrito Capital",
      categorias:["Consolas y Videojuegos","Otros"],
      recomendado:["Tablet Samsung S6 Lite","Laptop Gaming Hp Victus","Audifonos Trust Gxt 322b","Samsung Galaxy Tab S7"]
    },
    {
      imagenUrl:[{img:"../../../assets/Tablet Samsung S6.webp",id:0}],
      nombre:"Tablet Samsung S6 Lite 4 Gb Ram 64 Gb Incluye Spen 4g Lte",
      precio$:"U$S 490",
      precio:"Bs.5.686,90",
      tipoEnvio:"Pago",
      id:"02",
      existencias:3,
      vendidos:2,
      stars:3,
      direcVendedor:"Mun. Baruta (este), Distrito Capital",
      categorias:["Computación","Tablets y Accesorios","Tablets"],
      recomendado:["Oculus Quest 2","Laptop Gaming Hp Victus","Audifonos Trust Gxt 322b","Samsung Galaxy Tab S7"]
    },
    {
      imagenUrl:[{img:"../../../assets/Laptop Gaming Hp Victus.webp",id:0}],
      nombre:"Laptop Gaming Hp Victus 15-fa0031dx 8gb Ram 512gb Intel I5",
      precio$:"U$S 966",
      precio:"Bs.10.365,18",
      tipoEnvio:"Envío gratis",
      id:"03",
      existencias:5,
      vendidos:10,
      stars:5,
      direcVendedor:"Mun. Chacao (norte), Distrito Capital",
      categorias:["Computación","Laptops y Accesorios","Laptops"],
      recomendado:["Oculus Quest 2","Tablet Samsung S6 Lite","Audifonos Trust Gxt 322b","Samsung Galaxy Tab S7"]
    },
    {
      imagenUrl:[{img:"../../../assets/Audifonos.webp",id:0},{img:"../../../assets/audi.webp",id:1},{img:"../../../assets/audi2.webp",id:2}],
      nombre:"Audifonos Trust Gxt 322b Carus Gaming Con Microfono",
      precio$:"U$S 41,37",
      precio:"Bs.443,90",
      tipoEnvio:"Envío gratis",
      id:"04",
      existencias:8,
      vendidos:90,
      stars:4,
      direcVendedor:"Mun. Chacao (sur), Distrito Capital",
      categorias:["Computación","Accesorios para PC Gaming","Audífonos"],
      recomendado:["Oculus Quest 2","Tablet Samsung S6 Lite","Laptop Gaming Hp Victus","Samsung Galaxy Tab S7"]
    },
    {
      imagenUrl:[{img:"../../../assets/Samsung Galaxy Tab S7 Fe.webp",id:0}],
      nombre:"Samsung Galaxy Tab S7 Fe. Sm-t735. 4gb/64gb Wi-fi Lte 12,4'",
      precio$:"U$S 590",
      precio:"Bs.6.330,70",
      tipoEnvio:"Pago",
      id:"05",
      existencias:10,
      vendidos:1,
      stars:4,
      direcVendedor:"Mun. Libertador (Oeste), Distrito Capital",
      categorias:["Computación","Tablets y Accesorios","Tablets"],
      recomendado:["Oculus Quest 2","Tablet Samsung S6 Lite","Laptop Gaming Hp Victus","Audifonos Trust Gxt 322b"]
    },
    {
      imagenUrl:[{img:"../../../assets/panel_decorativo.webp",id:0}],
      nombre:"Panel Decorativo 3d Para Pared Autoadhesivo",
      precio$:"U$S 3,60",
      precio:"Bs.38,63",
      tipoEnvio:"Envío gratis",
      id:"06",
      existencias:8,
      vendidos:234,
      stars:5,
      direcVendedor:"Mun. Libertador (Sur), Distrito Capital",
      categorias:["Hogar y Muebles","Adornos y Decoración del Hogar","Vinilos DecorativosS"],
      recomendado:["Muebles Modular Piscis","Juego De Sillas P/comedor Rattan","Cerámicas 45x45 Sidus","Fregadero Doble Ponchera Aquafina"]
    },
    {
      imagenUrl:[{img:"../../../assets/mueble1.webp",id:0}],
      nombre:"Muebles Modular Piscis Chaise Longue Alta Calidad Fabrica",
      precio$:"U$S 820",
      precio:"Bs.8.798,60",
      tipoEnvio:"Pago",
      id:"07",
      existencias:2,
      vendidos:5,
      stars:5,
      direcVendedor:"Mun. Libertador (Sur), Distrito Capital",
      categorias:["Hogar y Muebles","Muebles para el Hogar","Juegos y Sets de Muebles","Juegos de Sala"],
      recomendado:["Panel Decorativo 3d","Juego De Sillas P/comedor Rattan","Cerámicas 45x45 Sidus","Fregadero Doble Ponchera Aquafina"]
    },
    {
      imagenUrl:[{img:"../../../assets/comedor.webp",id:0}],
      nombre:"Juego De Sillas P/comedor Rattan 4 Puestos Marrón Tejido",
      precio$:"U$S191,23",
      precio:"Bs.2.051,90",
      tipoEnvio:"Pago",
      id:"08",
      existencias:5,
      vendidos:2,
      stars:3,
      direcVendedor:"Mun. Libertador (Oeste), Distrito Capital",
      categorias:["Hogar y Muebles","Muebles para el Hogar","Juegos y Sets de Muebles","Juegos de Comedor"],
      recomendado:["Panel Decorativo 3d","Muebles Modular Piscis","Cerámicas 45x45 Sidus","Fregadero Doble Ponchera Aquafina"]
    },
    {
      imagenUrl:[{img:"../../../assets/ceramica.webp",id:0}],
      nombre:"Cerámicas Baldosas Para Piso/paredes 45x45 Sidus De 1ra",
      precio$:"U$S 25/caja",
      precio:"Bs.268,25",
      tipoEnvio:"Pago",
      id:"09",
      existencias:50,
      vendidos:250,
      stars:4,
      direcVendedor:"Mun. Chacao (norte), Distrito Capital",
      categorias:["Construcción","Pisos y Revestimientos","Cerámicas"],
      recomendado:["Panel Decorativo 3d","Muebles Modular Piscis","Juego De Sillas P/comedor Rattan","Fregadero Doble Ponchera Aquafina"]
    },
    {
      imagenUrl:[{img:"../../../assets/fregadero.webp",id:0}],
      nombre:"Fregadero Doble Ponchera Aquafina 48x84 (sin Griferia)",
      precio$:"U$S 45,04",
      precio:"Bs.483,28",
      tipoEnvio:"Envío gratis",
      id:"10",
      existencias:7,
      vendidos:15,
      stars:0,
      direcVendedor:"Mun. Baruta (este), Distrito Capital",
      categorias:["Hogar y Muebles","Muebles para el Hogar","Mobiliario para Cocinas","Amoblamientos de Cocina","Lavaplatos de Cocina"],
      recomendado:["Panel Decorativo 3d","Muebles Modular Piscis","Juego De Sillas P/comedor Rattan","Cerámicas 45x45 Sidus"]
    }
  ]

  like:boolean = false

  constructor( public roter: ActivatedRoute ) { }

  productID:any;

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    const id = this.roter.snapshot.paramMap.get('id')
    this.productID = id
  }

  manejarLike(like:boolean){
    if(like == true){
      this.like = false
    }else{
      this.like = true
    }
  }

  cambiarImg(a:any){
    this.imgid = a.id
  }

}
