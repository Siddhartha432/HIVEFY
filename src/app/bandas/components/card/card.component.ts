import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../../interfaces/bandas.interface';

@Component({
  selector: 'banda-bandas-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {

@Input()
public banda!:Banda;
ngOnInit(): void {
if(!this.banda) throw Error('Banda propety is required');
}
}
