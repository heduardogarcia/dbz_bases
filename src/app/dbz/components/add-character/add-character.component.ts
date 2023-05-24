import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  //inicializamos emitor de eventos
  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();



  public character:Character={
    name:'',
    power:0

  }
  emitCharacter():void{
    console.log(this.character);
    // debugger;
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name='';
    // this.character.power=0;
    this.character={name:'',power:0};

  }

}