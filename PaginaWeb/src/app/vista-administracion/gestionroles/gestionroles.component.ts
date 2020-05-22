import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Role } from './role';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionroles',
  templateUrl: './gestionroles.component.html',
  styleUrls: ['./gestionroles.component.css']
})
export class GestionrolesComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  roles: Observable<any>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) { }

  getRoles(){
    this.roles = this.http.get(this.ROOT_URL + '/posts');

  }

  ngOnInit(): void {
  }

}
