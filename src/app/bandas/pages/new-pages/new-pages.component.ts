import { Component, EventEmitter, Output } from '@angular/core';
import { Banda } from '../../interfaces/bandas.interface';
import { BandasService } from '../../services/bandas.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: ``
})
export class NewPagesComponent {

  public bandaForm = new FormGroup({
    id:  new FormControl<string>(''),
    banda:new FormControl<string>(''),
    alt_img:new FormControl<string>(''),
  });

constructor(
  private bandasService: BandasService,
  private activatedRoute: ActivatedRoute
 ){}

  get currentBanda():Banda{
    const banda = this.bandaForm.value as Banda;
    return banda;
  }

  ngOnInit(): void {
    this.bandasService.getBandas()
    .subscribe( bandas => this.bandas = bandas);
      }

onDeleteCharacter(id:string):void{  
  this.bandasService.deleteAlbumById(id)
  .subscribe(bandas => {
    
  });
}
      onSubmit():void{
        if(this.bandaForm.invalid) return;
        
          this.bandasService.addAlbum(this.currentBanda)
    .subscribe(bandas => {
    
    });
      
      }


  public bandas: Banda[] =[];
  
  
}
