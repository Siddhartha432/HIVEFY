import { Character } from './../../interfaces/character.interface';
import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.scss'
})
export class AddAlbumComponent {

  @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character : Character={
  banda: '',
  album: '',
  id:''
};

emitAlbum():void{
if(this.character.banda.length == 0) return;
if(this.character.album.length == 0) return;
this.onNewCharacter.emit(this.character);

   this.character = {banda: '',album:'',id:''};
}
}
