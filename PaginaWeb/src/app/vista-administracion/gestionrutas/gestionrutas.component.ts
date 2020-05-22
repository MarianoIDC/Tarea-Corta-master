import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Route } from './route';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionrutas',
  templateUrl: './gestionrutas.component.html',
  styleUrls: ['./gestionrutas.component.css']
})
export class GestionrutasComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  routes: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getRoutes(){
    this.routes = this.http.get(this.ROOT_URL + '/posts');

  }


  ngOnInit(): void {
  }

}
