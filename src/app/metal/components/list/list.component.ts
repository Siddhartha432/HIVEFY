import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'app-list-metal',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()
  public character: Character[]=[
];

@Output()
public onDeleteId: EventEmitter<string>=new EventEmitter();
onDeleteCharacter(id:string):void{  
  this.onDeleteId.emit(id);
}

}
