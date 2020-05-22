import { Component, OnInit } from '@angular/core';

@Component({
  /* Nombre de la etiqueta */
  selector: 'app-piepagina',
  /* Llama al html de su respectica dirección */
  templateUrl: './piepagina.component.html',
  /* Estilo del componente */
  styleUrls: ['./piepagina.component.css']
})
export class PiepaginaComponent implements OnInit {
  /* Declaración de imágenes */
  public walmart: string;
  public universal: string;
  public pandg: string;
  public kellogg: string;
  public nestle: string;


  constructor() {
    /* Dirección de las imágenes */
    this.walmart = './assets/Imagenes/Walmart.png'
    this.universal = './assets/Imagenes/Universal.png'
    this.pandg = './assets/Imagenes/P&G.png'
    this.kellogg = './assets/Imagenes/Kellogg.png'
    this.nestle = './assets/Imagenes/Nestle.png'

  }

  ngOnInit(): void {
  }

}
