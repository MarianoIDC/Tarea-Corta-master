import { Component, OnInit } from '@angular/core';



@Component({
  /* Nombre de la etiqueta */
  selector: 'app-carrusel',
  /* Llama al html de su respectica dirección */
  templateUrl: './carrusel.component.html',
  /* Estilo del componente */
  styleUrls: ['./carrusel.component.css', './carruselResources/bootstrap.min.css']
})
export class CarruselComponent implements OnInit {
  /* Declaración de imágenes */
  public paquete: string;
  public paquete2: string;
  public paquete3: string;
  

  constructor() {
    /* Dirección de las imágenes */
    this.paquete = './assets/Imagenes/Paquete.jpg'
    this.paquete2 = './assets/Imagenes/Paquete2.jpg'
    this.paquete3 = './assets/Imagenes/Paquete3.jpg'
    

  }

  ngOnInit(): void {
  }

}
