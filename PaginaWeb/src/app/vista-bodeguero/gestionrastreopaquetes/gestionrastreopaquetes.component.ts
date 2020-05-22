import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Paquete } from './paquete';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionrastreopaquetes',
  templateUrl: './gestionrastreopaquetes.component.html',
  styleUrls: ['./gestionrastreopaquetes.component.css']
})
export class GestionrastreopaquetesComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  paquetes: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getPaquetes(){
    
    this.paquetes = this.http.get(this.ROOT_URL + '/posts')
  
  }

  ngOnInit(): void {
  }

}
