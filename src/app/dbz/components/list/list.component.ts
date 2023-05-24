import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[]=[
    {name:'Trunks',power:500}
  ];

  onDeleteCharacter(character:Character):void{
    console.log(character.id);
    this.onDelete.emit(character.id);

  }
}
