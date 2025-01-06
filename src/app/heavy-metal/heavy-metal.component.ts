import { Component } from '@angular/core';

@Component({
  selector: 'heavy-metal',
  templateUrl: './heavy-metal.component.html',
  styleUrl: './heavy-metal.component.scss'
})
export class HeavyMetalComponent {
  title?: string;
option:number=0;
back:boolean=false;
 banda:string = 'Black Sabbath';
 descripcion:string ='Creada en 1968 en Birmingham, Inglaterra. El primer nombre de la banda era Eath.';
 imagen:string ='../../assets/black.jpg';

 suma(opcion:number):number{  //El simbolo de interrogación nos dice que la variable puede no utilizarse
  return opcion += 1;
}

 change():void{

  if(this.back==false){
    this.option = this.suma(this.option);
    }
    
switch (this.option) {
  case 0:
    this.banda = 'Black Sabbath';
  this.descripcion ='Creada en 1968 en Birmingham, Inglaterra. El primer nombre de la banda era Eath.';
  this.imagen ='../../assets/black.jpg';
    break;
    case 1:
      this.banda ='Linkin Park';
      this.descripcion = 'Se formó en 1996 en Agoura Hills, californa, por los músicos Mike Shinoda y Brand Delson.';
      this.imagen= '../../assets/LikinPark.jpeg';
    break;
    case 2:
this.banda = 'Mötorhead';
this.descripcion='La banda fue fundada en 1975 por Lemy Kilmister, en Londres Inglaterra. ';
  this.imagen ='../../assets/motorhead.jpeg';
    break;
}

this.back=false;
 }

 regresar(){
  this.option =0;
this.back=true;
  this.change();
 }

}

