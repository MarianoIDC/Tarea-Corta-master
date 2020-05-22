import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-barra-reportes',
  /* Llama al html de su respectica dirección */
  templateUrl: './barra-reportes.component.html',
  /* Estilo del componente */
  styleUrls: ['./barra-reportes.component.css']
})
export class BarraReportesComponent implements OnInit {
  /* Declaración de imágenes */
  public logo: string;

  constructor() { 
     /* Dirección de las imágenes */
     this.logo = './assets/Imagenes/Logo.png'
  }

  ngOnInit(): void {
  }

}
