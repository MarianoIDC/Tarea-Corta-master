import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-barra-bodeguero',
  /* Llama al html de su respectica dirección */
  templateUrl: './barra-bodeguero.component.html',
  /* Estilo del componente */
  styleUrls: ['./barra-bodeguero.component.css']
})
export class BarraBodegueroComponent implements OnInit {
/* Declaración de imágenes */
public logo: string;

  constructor() {
    /* Dirección de las imágenes */
    this.logo = './assets/Imagenes/Logo.png'
   }

  ngOnInit(): void {
  }

}
