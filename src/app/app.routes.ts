import {Routes} from '@angular/router';
import {authGuard} from './auth/auth.guard';

export const routes: Routes = [
  {
    path: "auth",
    loadComponent: () => import('./auth/auth').then(m => m.Auth),
    title: "Doppelkopf"
  },
  {
    path: 'lobby',
    canActivate: [authGuard],
    loadComponent: () => import('./lobby/lobby').then(m => m.Lobby),
    title: "Doppelkopf Lobby"
  },
  {
    path: "game/:id",
    canActivate: [authGuard],
    loadComponent: () => import('./game/game').then(m => m.Game),
    title: "Doppelkopf playing Table"
  },
  {
    path: "",
    redirectTo: "lobby",
    pathMatch: "full",
  },
];
