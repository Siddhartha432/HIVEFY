import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router, 
  ){}
onLogin():void{
this.authService.login('jose@gmail.com','123')
.subscribe( user =>{
this.router.navigate(['/']);
})
}
}
