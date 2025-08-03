import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {loadAuth} from "../state/auth.actions";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-login',
    imports: [
        FormsModule
    ],
    templateUrl: './login.html',
    styleUrl: './login.scss'
})
export class Login {
    private store = inject(Store)

    username = '';
    password = '';

    constructor(private auth: AuthService, private router: Router) {
    }

    onLoginSubmit(event: Event) {
        event.preventDefault();
        this.auth.login(this.username, this.password).subscribe({
                next: () => {
                    this.store.dispatch(loadAuth());
                },
                error: err => {
                    // todo error handling for form
                    console.warn('Login failed with error: ', err);
                }
            }
        )
    }
}
