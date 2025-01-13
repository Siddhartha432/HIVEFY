import { usuarios } from '../../../auth/interfaces/interfaces';
import { AuthService } from './../../../auth/services/users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
public sidebarItems = [
  {label: 'Listado',icon: 'label',url:'./lista'},
  {label:'Añadir',icon:'add',url:'./newBanda'},
  {label:'Buscar',icon:'search',url:'./search'},
]
constructor(
  private authService:AuthService,
  private router: Router,
){}
get user():usuarios|undefined{
  return this.authService.currentUser;

}
onLogout(){
  this.authService.logout();
  this.router.navigate(['/auth/login'])
}
}
