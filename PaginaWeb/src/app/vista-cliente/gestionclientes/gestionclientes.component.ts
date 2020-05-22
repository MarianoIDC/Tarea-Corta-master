import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gestionclientes',
  templateUrl: './gestionclientes.component.html',
  styleUrls: ['./gestionclientes.component.css']
})
export class GestionclientesComponent implements OnInit {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  clients: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getClients(){
    
    this.clients = this.http.get(this.ROOT_URL + '/posts')
  
  }

  ngOnInit(): void {
  }

}
