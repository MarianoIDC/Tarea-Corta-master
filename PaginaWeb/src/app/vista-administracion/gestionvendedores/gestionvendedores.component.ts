import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Sales } from './sales';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionvendedores',
  templateUrl: './gestionvendedores.component.html',
  styleUrls: ['./gestionvendedores.component.css']
})
export class GestionvendedoresComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  salespeople: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getSalespeople(){
    this.salespeople = this.http.get(this.ROOT_URL + '/posts');

  }

  ngOnInit(): void {
  }

}
