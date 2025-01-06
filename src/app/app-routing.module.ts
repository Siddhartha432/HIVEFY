import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent1 } from './LogIn/pages/main-page.component1';
import { MainPageComponent } from './metal/pages/main-page.component';
import path from 'path';
const routes: Routes = [
 {
    path: 'home',
    component: MainPageComponent1,
  },
  {
    path: 'albums',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
