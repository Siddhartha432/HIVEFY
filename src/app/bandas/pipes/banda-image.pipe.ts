import { Pipe, PipeTransform } from '@angular/core';
import { Banda } from '../interfaces/bandas.interface';

@Pipe({
  name: 'bandaImage'
})
export class BandaImagePipe implements PipeTransform {

transform(banda:Banda):string {
  if(!banda.id && !banda.alt_img){
    return 'assets/vacio.png'
  }
  if(banda.alt_img) return banda.alt_img;
  return `assets/${banda.id}.jpeg`;
}

}
