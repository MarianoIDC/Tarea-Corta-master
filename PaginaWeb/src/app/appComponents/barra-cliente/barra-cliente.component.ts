import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-barra-cliente',
  /* Llama al html de su respectica dirección */
  templateUrl: './barra-cliente.component.html',
  /* Estilo del componente */
  styleUrls: ['./barra-cliente.component.css']
})
export class BarraClienteComponent implements OnInit {
  /* Declaración de imágenes */
  public logo: string;

  constructor() {
    /* Dirección de las imágenes */
    this.logo = './assets/Imagenes/Logo.png'
   }

  ngOnInit(): void {
  }

}
