import { Component } from '@angular/core';
import { Banda } from '../../interfaces/bandas.interface';
import { BandasService } from '../../services/bandas.service';
@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: ``
})
export class NewPagesComponent {
  public bandas: Banda[] =[];
  constructor(private bandasService:BandasService){}
  
    ngOnInit(): void {
  this.bandasService.getBandas()
  .subscribe( bandas => this.bandas = bandas);
    }
}
