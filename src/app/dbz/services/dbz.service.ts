import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character';
import { v4 as uuid } from 'uuid'
console.log((uuid()));

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters:Character[]=[
    {id:uuid(),name:'Krillin',power:500},
    {id:uuid(),name:'Goku',power:9500},
    {id:uuid(),name:'Bills',power:19500},
    {id:uuid(),name:'Hit',power:23400},
    {id:uuid(),name:'MJ',power:19900},
  ];
  addCharacter(character:Character):void{
    const newCharacter:Character={id:uuid(),...character};
    this.characters.push(newCharacter);
  }
  // onDeleteCharacter(index:number){
  //   console.log(`Eliminando: ${index} ` );
  //   this.characters.splice(index,1);
  //   console.log(this.characters);
  // }
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);
  }


}
