import {User} from './auth.models';
import {createReducer, on} from '@ngrx/store';
import {loadAuthFailure, loadAuthSuccess, logoutSuccess} from './auth.actions';
import {ApiError} from '../../global.models';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: ApiError | null;
  loaded: boolean;
}


export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loaded: false,
}

export const authReducer = createReducer(
  initialState,
  on(
    loadAuthSuccess,
    (state, {user}) => {
        console.debug(`[load auth success triggered]`, user)
        return ({
            ...state,
            user,
            isAuthenticated: !!user,
            error: null,
            loaded: true,
        })
    }
  ),
  on(
    loadAuthFailure,
    (state, {error}) => ({
      ...state,
      user: null,
      isAuthenticated: false,
      error: error,
      loaded: true,
    })
  ),
  on(
    logoutSuccess,
    (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
      error: null,
      loaded: true,
    })
  )
);
