import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compraproductos',
  templateUrl: './compraproductos.component.html',
  styleUrls: ['./compraproductos.component.css']
})
export class CompraproductosComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  products: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getProducts(){
    
    this.products = this.http.get(this.ROOT_URL + '/posts')
  
  }

  ngOnInit(): void {
  }

}
