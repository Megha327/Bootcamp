import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerCockpitComponent } from './server-cockpit/server-cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    ServerCockpitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
