import { Component } from '@angular/core';

@Component({
  selector: 'heavy-metal',
  templateUrl: './heavy-metal.component.html',
  styleUrl: './heavy-metal.component.scss'
})
export class HeavyMetalComponent {
  title: string = 'HEAVY METAL';
  banda: string = 'Black Sabbath';
 contador: number = 10;
 descripcion:string ='Creada en 1968 en Birmingham, Inglaterra. El primer nombre de la banda era Eath.';
 imagen:string='../../assets/black.jpg'
 change(option:number){
  if(option == 1){
this.banda = 'Black Sabbath';
  this.descripcion ='Creada en 1968 en Birmingham, Inglaterra. El primer nombre de la banda era Eath.';
  this.imagen ='../../assets/black.jpg';
  }
    if(option == -1){
  this.banda ='Linkin Park';
this.descripcion = 'Se formó en 1996 en Agoura Hills, californa, por los músicos Mike Shinoda y Brand Delson.';
this.imagen= '../../assets/LikinPark.jpeg';
    }
  if(option == 10){
this.banda = 'Mötorhead';
this.descripcion='La banda fue fundada en 1975 por Lemy Kilmister, en Londres Inglaterra. ';
  this.imagen ='../../assets/motorhead.jpeg';
  }
 }
}
