import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';


const appRoutes:Routes=[
  {path:'', component: DashboardComponentComponent},
  {path:'dashboard', component: DashboardComponentComponent},
  {path:'product', component: ProductComponentComponent},
  {path:'product/:id', component:DashboardComponentComponent},
  {path:'**', component: PageNotFooundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DashboardComponentComponent, 
  ProductComponentComponent,
  PageNotFooundComponent]
