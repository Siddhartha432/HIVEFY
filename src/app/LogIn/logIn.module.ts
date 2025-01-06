import { NgModule } from '@angular/core';
import { MainPageComponent1 } from './pages/main-page.component1';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [MainPageComponent1,FormularioComponent],
    imports: [RouterModule],
    exports: [MainPageComponent1],
   
    
})
export class logInModule { }
