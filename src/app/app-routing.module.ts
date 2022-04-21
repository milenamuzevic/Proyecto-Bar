import { PathLocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AgendaComponent } from './vistas/agenda/agenda.component';
import { ComprarComponent } from './vistas/comprar/comprar.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { GastronomiaCocteleriaComponent } from './vistas/gastronomia-cocteleria/gastronomia-cocteleria.component';
import { NosotrosComponent } from './vistas/nosotros/nosotros.component';
import { PrincipalComponent } from './vistas/principal/principal.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'cocina', component: GastronomiaCocteleriaComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'agenda', component: AgendaComponent},
  {path:'comprar', component: ComprarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
