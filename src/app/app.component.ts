import { Component, OnInit } from '@angular/core';
import { Input } from    '@angular/core';
import { AuthService } from './auth/services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 title: string = 'HIVEFY';


}
