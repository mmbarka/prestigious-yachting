import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddYachtComponent } from './components/add-yacht/add-yacht.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addYacht', component:AddYachtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
