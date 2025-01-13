import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {


  public bandaForm = new FormGroup({
    id:  new FormControl<string>(''),
    usuario: new FormControl<string>(''),
    correo: new FormControl<string>(''),
    contraseña: new FormControl<string>('')
    });

}
