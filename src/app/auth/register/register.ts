import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthService} from '../auth.service';
import {register} from '../state/auth.actions';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  private store = inject(Store);

  username = ''
  password = ''
  passwordConfirm = ''

  constructor(private auth: AuthService) {
  }

  onRegisterSubmit(event: Event) {
    event.preventDefault();
    this.store.dispatch(register({
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }));
  }
}
