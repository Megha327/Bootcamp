import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductComponentComponent } from './product-component/product-component.component';
// import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
// import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';


// const appRoutes:Routes=[
//   {path:'', component: DashboardComponentComponent},
//   {path:'dashboard', component: DashboardComponentComponent},
//   {path:'product', component: ProductComponentComponent},
//   {path:'product/:id', component:DashboardComponentComponent},
//   {path:'**', component:PageNotFooundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
    // ProductComponentComponent,
    // DashboardComponentComponent,
    // PageNotFooundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
