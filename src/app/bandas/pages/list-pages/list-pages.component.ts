import { Component, OnInit } from '@angular/core';
import { Banda } from '../../interfaces/bandas.interface';
import { BandasService } from '../../services/bandas.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: ``
})
export class ListPagesComponent implements OnInit {
public bandas: Banda[] =[];
constructor(private bandasService:BandasService){}

  ngOnInit(): void {
this.bandasService.getBandas()
.subscribe( bandas => this.bandas = bandas);
  }
}
