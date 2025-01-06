import { Component } from '@angular/core';

@Component({
  selector: 'app-symphonic-metal',
  templateUrl: './symphonic-metal.component.html',
  styleUrl: './symphonic-metal.component.scss'
})
export class SymphonicMetalComponent {



  public banda?:string;
  public origin?:string;
  public integrantes?:string;
  public albums?:string;
  public description?:string;

  chageBand(key:number) {
    key+= key;
    switch(key){
//--------------------------------
      case 0:
      this.banda= 'Tristania';
      this.origin= 'Noruega';
      this.integrantes = 'Andres, Mariangela, Gyri, Tarald, Kietil';
      this.albums='Windows weeds, Beyond the Veil, World of Glass, Ashes, Illumination, Rubicon, Darkest White';
      break;
//--------------------------------
      case 1:
        
      break;
//--------------------------------
      default: 
      this.banda= 'Tristania';
      this.origin= 'Noruega';
      this.integrantes = 'Andres, Mariangela, Gyri, Tarald, Kietil';
      this.albums='Windows weeds, Beyond the Veil, World of Glass, Ashes, Illumination, Rubicon, Darkest White';
      break;
    }
  }
  
}
