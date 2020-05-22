import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Paquete } from './paquete';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionpaquetes',
  templateUrl: './gestionpaquetes.component.html',
  styleUrls: ['./gestionpaquetes.component.css']
})
export class GestionpaquetesComponent implements OnInit {

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
