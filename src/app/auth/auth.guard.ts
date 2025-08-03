import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {filter, map, switchMap, take, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectAuthState, selectAuthStatusLoaded} from './state/auth.selectors';
import {loadAuth} from './state/auth.actions';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectAuthStatusLoaded).pipe(
    take(1),
    switchMap((loaded) => {
      if (!loaded) {
        store.dispatch(loadAuth());
      }

      return store.select(selectAuthState).pipe(
        filter(state => state.loaded), // Warte auf geladenen Zustand
        take(1),
        tap((state) => {
          console.info('[Guard] isAuthenticated after load:', state.isAuthenticated);
          if (!state.isAuthenticated) {
            router.navigate(['/auth']).then(() =>
              console.info('Redirected due to missing login')
            );
          }
        }),
        map((state) => state.isAuthenticated)
      );
    })
  );
};
