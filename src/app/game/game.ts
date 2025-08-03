import {Component} from '@angular/core';
import {Seat} from './seat/seat';
import {Trick} from './trick/trick';
import {State} from './state/state';
import {Action} from './action/action';
import {Hand} from './hand/hand';
import {Results} from './results/results';

@Component({
  selector: 'app-game',
  imports: [
    Seat,
    Trick,
    State,
    Action,
    Hand,
    Results
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

}
