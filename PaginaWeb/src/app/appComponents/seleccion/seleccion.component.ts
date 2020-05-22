import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';


@Component({
  /* Nombre de la etiqueta */
  selector: 'app-seleccion',
  /* Programa en código html */
  template: `
      <div class="form-group mt-2">
          <select [(ngModel)]="empSelected" (ngModelChange)='onEmployeeSelected($event)' class="form-control">
              <option *ngFor="let emp of employee" [value]="emp.Id">
                  {{emp.Name}}
              </option>
        </select>

    </div>

        <!-- Label de correo -->
    <label for="inputEmail" class="sr-only">Correo electrónico</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Correo electrónico" required autofocus>
    
    <!-- Label de contraseña -->
    <label for="inputPassword" class="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
    
    <!-- Checkbox de recordar -->
    <div class="checkbox mb-3 mt-1 text-lg-left">
        <label>
                <input type="checkbox" value="remember-me"> Recordarme
            </label>
    </div>

    
    <!-- Boton de iniciar sesión -->
    <a class="py-2 d-none d-md-inline-block" routerLink="{{eleccion()}}">
        <button class="btn btn-light btn-out btn-primary" type="submit">Iniciar sesión</button>
    </a>
  `,

  /* Estilo del componente */
  styleUrls: ['./seleccion.component.css']
})




export class SeleccionComponent implements OnInit {
    employee:Employee[];
    empSelected:Number;

    modifedtext:string;
    public valorselecionado: string;
    public rutacliente: string;
    public rutaadministracion: string;
    public rutabodeguero: string;
    public rutareportes: string;
    
    

  constructor() { 
    this.valorselecionado= "1";
    this.rutacliente = '/vistacliente';
    this.rutaadministracion = '/vistaadministracion';
    this.rutabodeguero = '/vistabodeguero';
    this.rutareportes = '/vistareportes';
    
  }

  eleccion():string {
 
    if(this.valorselecionado=="1") {
      return ('/vistacliente');

    }else if(this.valorselecionado=="2") {
      return ('/vistaadministracion');

    }else if(this.valorselecionado=="3") {
      return ('/vistabodeguero');

    }else if(this.valorselecionado=="4") {
      return ('/vistareportes');


    }
    else{
      return ('/vistacliente');
    }
}

  ngOnInit(): void {
      this.employee =[
          {Id:1,Name:"Cliente"},
          {Id:2,Name:"Administración"},
          {Id:3,Name:"Bodeguero"},
          {Id:4,Name:"Reportes"}
      ];
      this.empSelected=1;
  }

  onEmployeeSelected(val:any)
  {
      /* web api */
        this.customFunction(val);
  }


  customFunction(val:any)
  {
      this.modifedtext= "El valor " + val + " fue seleccionado";
      this.valorselecionado= val;
  }

}
