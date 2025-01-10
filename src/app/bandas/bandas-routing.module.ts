import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { bandaComponent } from './pages/banda-page/banda-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path:'newBanda', component:NewPagesComponent},
      {path: 'bandaC/:id',component: bandaComponent}, 
      { path:'search', component:SearchPageComponent},
      { path:'edit/:id', component:NewPagesComponent},
      { path:'lista', component:ListPagesComponent},
      { path:':id', component:SearchPageComponent},
      { path:'**', redirectTo: 'lista'},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandasRoutingModule { }
