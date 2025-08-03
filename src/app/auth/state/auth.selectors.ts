import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
)

export const selectAuthStatusIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
)

export const selectAuthStatusLoaded = createSelector(
  selectAuthState,
  (state) => state.loaded
)

export const selectAuthStatusError = createSelector(
  selectAuthState,
  (state) => state.error
)
