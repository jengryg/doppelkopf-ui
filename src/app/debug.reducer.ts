import {ActionReducer} from '@ngrx/store';

/**
 * Debugging reducer. Prints actions and current state into the console as debug logs.
 */
export function debugMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.debug(`Dispatched action: ${action.type} for state ${JSON.stringify(state)} `);
    return reducer(state, action);
  }
}
