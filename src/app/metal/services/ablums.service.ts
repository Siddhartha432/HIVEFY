import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {  v4 as uuid } from 'uuid';


@Injectable({
    providedIn: 'root'
})
export class MetalService {
    public characters: Character[]=[
        {
            id: uuid(),
            banda:'Creon Magnetar',
            album: 'The Level Beneath'
        },{
            id: uuid(),
            banda: 'PSYCHO-FRAME',
            album: 'DRAGGING NAZARENE'
        },{
        id: uuid(),
        banda:'NECRONOMIDOL',
        album: 'vämjelseriter'
       },
    ];
//onDelet(index:number):void{
  //  this.character.splice(index,1);
  onDeletById(id:string){
    console.log('Item con el id '+ id+' fur borrado');
    this.characters = this.characters.filter(character => character.id != id)
}

    onNewCharacter( character:Character):void{

        const newCharacter: Character = { ...character,id:uuid()}

        this.characters.push(newCharacter);
    }
 
    
}