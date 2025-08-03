import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {catchError, filter, map, Observable, of, switchMap, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../auth.service';
import {loadAuth, loadAuthFailure, loadAuthSuccess, register, registerFailure, registerSuccess} from './auth.actions';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  private loadAuth$: Observable<Action>
  private redirectAfterLogin$: Observable<Action>
  private register$: Observable<Action>

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loadAuth$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadAuth),
        tap(() => console.info(`[auth] loading auth status`)),
        switchMap(() =>
          this.authService.whoAmI().pipe(
            map(user => loadAuthSuccess({user})),
            catchError(error => {
              if (error.status === 401) {
                // not logged in, handle as anonymous
                return of(loadAuthSuccess({user: null}))
              } else {
                return of(loadAuthFailure({error}));
              }
            })
          )
        )
      )
    );

    this.redirectAfterLogin$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadAuthSuccess),
          filter(action => !!action.user),
          tap(() => {
            console.info('[AuthEffects] Redirecting to lobby after login...');
            this.router.navigate(['/lobby']).then(() => console.info('Login successful'));
          })
        ),
      {dispatch: false}
    );

    this.register$ = createEffect(() =>
      this.actions$.pipe(
        ofType(register),
        switchMap(({username, password, passwordConfirm}) =>
          this.authService.register(username, password, passwordConfirm).pipe(
            map(user => registerSuccess({user})),
            catchError(error => of(registerFailure({error})))
          )
        )
      )
    );
  }
}
