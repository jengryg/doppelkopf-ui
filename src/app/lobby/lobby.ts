import {Component} from '@angular/core';
import {Tables} from './tables/tables';
import {NewTable} from './new-table/new-table';

@Component({
  selector: 'app-lobby',
  imports: [
    Tables,
    NewTable
  ],
  templateUrl: './lobby.html',
  styleUrl: './lobby.scss'
})
export class Lobby {

}
