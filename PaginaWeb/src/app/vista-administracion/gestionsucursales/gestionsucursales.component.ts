import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionsucursales',
  templateUrl: './gestionsucursales.component.html',
  styleUrls: ['./gestionsucursales.component.css']
})
export class GestionsucursalesComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  shops: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getShops(){
    this.shops = this.http.get(this.ROOT_URL + '/posts');

  }

  ngOnInit(): void {
  }

}
