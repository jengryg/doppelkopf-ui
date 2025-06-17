import {Routes} from '@angular/router';
import {Lobby} from './lobby/lobby';
import {Game} from './game/game';

export const routes: Routes = [
  {
    path: "",
    component: Lobby,
    title: "Doppelkopf"
  },
  {
    path: "game/:id",
    component: Game,
    title: "Doppelkopf playing Table"
  }
];
