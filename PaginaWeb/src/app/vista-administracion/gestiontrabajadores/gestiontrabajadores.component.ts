import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Worker } from './worker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestiontrabajadores',
  templateUrl: './gestiontrabajadores.component.html',
  styleUrls: ['./gestiontrabajadores.component.css']
})
export class GestiontrabajadoresComponent implements OnInit {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  workers: Observable<any>;
  newPackage: Observable<any>;

  getWorkers(){
    this.workers = this.http.get(this.ROOT_URL + '/posts');

  }

  ngOnInit(): void {
  }

}
