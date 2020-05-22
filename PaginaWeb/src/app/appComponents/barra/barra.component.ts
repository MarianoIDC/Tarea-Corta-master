import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-barra',
  /* Llama al html de su respectica dirección */
  templateUrl: './barra.component.html',
  /* Estilo del componente */
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  /* Declaración de imágenes */
  public logo: string;

  constructor() {
    /* Dirección de las imágenes */
    this.logo = './assets/Imagenes/Logo.png'
   }

  ngOnInit(): void {
  }

}
