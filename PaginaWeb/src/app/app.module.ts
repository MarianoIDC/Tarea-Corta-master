// Imports de Angular

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import para navegar en la pagina sin refrescar
import {RouterModule, Route} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


/* COMPONENTES */
import { AppComponent } from './app.component';
import { CarruselComponent } from './appComponents/carrusel/carrusel.component';
import { IniciosesionComponent } from './appComponents/iniciosesion/iniciosesion.component';
import { PiepaginaComponent } from './appComponents/piepagina/piepagina.component';
import { VideoComponent } from './appComponents/video/video.component';
import { SeleccionComponent } from './appComponents/seleccion/seleccion.component';



/* PÁGINA PRINCIPAL */
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
/* Ventana Acerca de */
import { AcercadeComponent } from './paginaprincipal/acercade/acercade.component';
/* Ventana Inicio Sesión */
import { PaginiciosesionComponent } from './paginaprincipal/paginiciosesion/paginiciosesion.component';
/* Barra de navegación */
import { BarraComponent } from './appComponents/barra/barra.component';


/* VISTA ADMINISTRACIÓN */
import { VistaAdministracionComponent } from './vista-administracion/vista-administracion.component';
/* Ventana Gestión de Roles */
import { GestionrolesComponent } from './vista-administracion/gestionroles/gestionroles.component';
/* Ventana Gestión de Sucursales */
import { GestionsucursalesComponent } from './vista-administracion/gestionsucursales/gestionsucursales.component';
/* Ventana Gestión de trabajadores */
import { GestiontrabajadoresComponent } from './vista-administracion/gestiontrabajadores/gestiontrabajadores.component';
/* Ventana Gestión de Vendedores */
import { GestionvendedoresComponent } from './vista-administracion/gestionvendedores/gestionvendedores.component';
/* Ventana Gestión de Productos */
import { GestionproductosComponent } from './vista-administracion/gestionproductos/gestionproductos.component';
/* Ventana Gestión de Rutas */
import { GestionrutasComponent } from './vista-administracion/gestionrutas/gestionrutas.component';
/* Barra de navegación */
import { BarraAdministracionComponent } from './appComponents/barra-administracion/barra-administracion.component';


/* VISTA BODEGUERO */
import { VistaBodegueroComponent } from './vista-bodeguero/vista-bodeguero.component';
/* Ventana Gestión de Paquetes */
import { GestionpaquetesComponent } from './vista-bodeguero/gestionpaquetes/gestionpaquetes.component';
/* Ventana Gestión de Rastreo de Paquetes  */
import { GestionrastreopaquetesComponent } from './vista-bodeguero/gestionrastreopaquetes/gestionrastreopaquetes.component';
/* Barra de navegación */
import { BarraBodegueroComponent } from './appComponents/barra-bodeguero/barra-bodeguero.component';


/* VISTA REPORTES */
import { VistaReportesComponent } from './vista-reportes/vista-reportes.component';
/* Ventana Listado de Productos más vendidos */
import { ProductosmasvendidosComponent } from './vista-reportes/productosmasvendidos/productosmasvendidos.component';
/* Ventana Listado de Reparto */
import { ListadorepartoComponent } from './vista-reportes/listadoreparto/listadoreparto.component';
/* Ventana Paquetes Entregados */
import { PaquetesentregadosComponent } from './vista-reportes/paquetesentregados/paquetesentregados.component';
/* Barra de navegación */
import { BarraReportesComponent } from './appComponents/barra-reportes/barra-reportes.component';




/* VISTA CLIENTE */
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
/* Ventana Gestión de Clientes/creación de casillero */
import { GestionclientesComponent } from './vista-cliente/gestionclientes/gestionclientes.component';
/* Ventana Rastreo de Paquete */
import { RastreopaqueteComponent } from './vista-cliente/rastreopaquete/rastreopaquete.component';
/* Ventana Compra de Productos */
import { CompraproductosComponent } from './vista-cliente/compraproductos/compraproductos.component';
/* Barra de navegación */
import { BarraClienteComponent } from './appComponents/barra-cliente/barra-cliente.component';








import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';





// Arreglo de las rutas disponibles dentro de mi aplicacion
const routes : Route[] = [
  /* Link de Página Principal */
    {path : '', component : PaginaprincipalComponent},
    {path : 'acercade', component : AcercadeComponent},
    {path : 'iniciosesion', component : PaginiciosesionComponent},
    

  /* Link de Vista Administrador */
    {path : 'vistaadministracion', component : VistaAdministracionComponent},
    {path : 'gestionroles', component : GestionrolesComponent},
    {path : 'gestionsucursales', component : GestionsucursalesComponent},
    {path : 'gestiontrabajadores', component : GestiontrabajadoresComponent},
    {path : 'gestionvendedores', component : GestionvendedoresComponent},
    {path : 'gestionproductos', component : GestionproductosComponent},
    {path : 'gestionrutas', component : GestionrutasComponent},
  

  /* Link de Vista Bodeguero */
    {path : 'vistabodeguero', component : VistaBodegueroComponent},
    {path : 'gestionpaquetes', component : GestionpaquetesComponent},
    {path : 'gestionrastreopaquetes', component : GestionrastreopaquetesComponent},


  /* Link de Vista Reportes */
    {path : 'vistareportes', component : VistaReportesComponent},
    {path : 'productosmasvendidos', component : ProductosmasvendidosComponent},
    {path : 'listadoreparto', component : ListadorepartoComponent},
    {path : 'paquetesentregados', component : PaquetesentregadosComponent},


  /* Link de Vista Cliente */
    {path : 'vistacliente', component : VistaClienteComponent},
    {path : 'gestionclientes', component : GestionclientesComponent},
    {path : 'rastreopaquete', component : RastreopaqueteComponent},
    {path : 'compraproductos', component : CompraproductosComponent}
    
    
    ]

@NgModule({
  declarations: [
    /* Componentes */
    AppComponent,
    CarruselComponent,
    IniciosesionComponent,
    PiepaginaComponent,
    VideoComponent,
    SeleccionComponent,
    

    /* Página Principal */
    PaginaprincipalComponent,
    AcercadeComponent,
    PaginiciosesionComponent,
    BarraComponent,

    /* Vista Administración */
    VistaAdministracionComponent,
    GestionrolesComponent,
    GestionsucursalesComponent,
    GestiontrabajadoresComponent,
    GestionvendedoresComponent,
    GestionproductosComponent,
    GestionrutasComponent,
    BarraAdministracionComponent,

    /* Vista Bodeguero */
    VistaBodegueroComponent,
    GestionpaquetesComponent,
    GestionrastreopaquetesComponent,
    BarraBodegueroComponent,

    /* Vista Reportes */
    VistaReportesComponent,
    ProductosmasvendidosComponent,
    ListadorepartoComponent,
    PaquetesentregadosComponent,
    BarraReportesComponent,

    /* Vista Cliente */
    VistaClienteComponent,
    GestionclientesComponent,
    RastreopaqueteComponent,
    CompraproductosComponent,
    BarraClienteComponent,


    
    ProductsComponent,


    
    SeleccionComponent,
 
  ],




  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
