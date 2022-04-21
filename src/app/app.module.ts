import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FotherComponent } from './fother/fother.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { GastronomiaCocteleriaComponent } from './vistas/gastronomia-cocteleria/gastronomia-cocteleria.component';
import { NosotrosComponent } from './vistas/nosotros/nosotros.component';
import { AgendaComponent } from './vistas/agenda/agenda.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { CalendarioComponent } from './calendario/calendario.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FotherComponent,
    PrincipalComponent,
    GastronomiaCocteleriaComponent,
    NosotrosComponent,
    AgendaComponent,
    ContactoComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
