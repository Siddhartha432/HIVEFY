import { Component } from '@angular/core';
import { Input } from    '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
public  title: string = 'HIVEFY';
public subtitle: string = 'GUÍA DEL METAL';
public counter: number = 10;
public numero: number = 4;
sumar(){
  this.numero = this.numero + 1;
  console.log('hola mundo');
}
}
