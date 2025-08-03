import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectAuthState} from './auth/state/auth.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Doppelkopf';

  constructor(private store: Store) {
    this.store.select(selectAuthState).subscribe(state => {
      console.log('[Global Auth State]', state);
    });
  }
}
