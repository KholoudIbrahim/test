import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'table' , component: TableComponent},
  {path:'graph' , component: GraphComponent},
  {path:'chart' , component: ChartComponent},
  {path:'**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
