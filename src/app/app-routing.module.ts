import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import path from 'path';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
  path: 'bandas',
  loadChildren: () => import('./bandas/bandas.module').then(m => m.BandasModule),
canActivate:[AuthGuard],
canMatch:[AuthGuard]
},
{
path: 'auth',
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
},


{
  path: '404',
  component: Error404PageComponent,
},
{
  path:'',
  redirectTo: 'bandas ',
  pathMatch: 'full'
},{
  path:'**',
  redirectTo: 'bandas'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
