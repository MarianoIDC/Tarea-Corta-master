import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  products: any;
  newPackage: Observable<any>;
  items = []

  constructor(private http: HttpClient) { }

  getProducts(){
    this.products = this.http.get(this.ROOT_URL + '/posts');
    this.http.get(this.ROOT_URL + '/posts').toPromise().then(data =>{
      console.log(data);

      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    })
  }


  ngOnInit(): void {
  }

}
