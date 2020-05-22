import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-barra-administracion',
  /* Llama al html de su respectica dirección */
  templateUrl: './barra-administracion.component.html',
  /* Estilo del componente */
  styleUrls: ['./barra-administracion.component.css']
})
export class BarraAdministracionComponent implements OnInit {
  /* Declaración de imágenes */
  public logo: string;

  constructor() {
    /* Dirección de las imágenes */
    this.logo = './assets/Imagenes/Logo.png'
   }

  ngOnInit(): void {
  }

}
