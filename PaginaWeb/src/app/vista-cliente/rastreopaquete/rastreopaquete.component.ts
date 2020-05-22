import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Package } from './package';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rastreopaquete',
  templateUrl: './rastreopaquete.component.html',
  styleUrls: ['./rastreopaquete.component.css']
})
export class RastreopaqueteComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  packages: Observable<any[]>;
  newPackage: Observable<any>;

  constructor(private http: HttpClient) {
    /*aqui deberia ir un get para cuando carga la pagina.*/
    /* this.http.get(this.ROOT_URL + '/posts').subscribe((res: any)=> {
      console.log(res);
    }); */
  }

  getPackages(){
    
    let params = new HttpParams().set('userId', '2');
    this.packages = this.http.get<Package[]>(this.ROOT_URL + '/posts', {params} ) /*Parametros de busqueda necesarios: id de paquete*/
    
  }

  ngOnInit(): void {
  }

}
