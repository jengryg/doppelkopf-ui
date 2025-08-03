import {createAction, props} from '@ngrx/store';
import {User} from './auth.models';
import {ApiError} from '../../global.models';

export const loadAuth = createAction('[auth] load auth');

export const loadAuthSuccess = createAction(
    '[auth] load auth success',
    props<{ user: User | null }>()
);

export const loadAuthFailure = createAction(
    '[auth] load auth failure',
    props<{ error: ApiError }>()
);

export const logoutSuccess = createAction(
    '[auth] logout success',
)

export const register = createAction(
    '[Auth] Register',
    props<{ username: string; password: string; passwordConfirm: string }>()
);

export const registerSuccess = createAction(
    '[Auth] Register Success',
    props<{ user: User }>()
);

export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ error: ApiError }>()
);

export const doLogout = createAction('[auth do logout]')
