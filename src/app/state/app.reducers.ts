import { AppTodoActions, AppActions, AppTodoLoadSuccess } from './app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TodoModel {
  userId: number;
  id: number;
  title:  string;
  completed: boolean;
}

export interface State {
  loading: boolean;
  data: TodoModel[];
}

const InitialState: State = {
  loading: false,
  data: []
};

const getAllState = createFeatureSelector<State>('todos');
export const getLoading = createSelector(getAllState, state => state.loading);

export function reducer(state = InitialState, action: AppTodoActions): State {
  switch (action.type) {
    case AppActions.AppTodoLoad:
      return {...state};
    case AppActions.AppTodoLoading:
      return {...state, loading: true};
    case AppActions.AppTodoLoadSuccess:
      return {...state, loading: false, data: (<AppTodoLoadSuccess>action).payload};
    case AppActions.AppTodoLoadFail:
      return {...state, loading: false, data: []};
    default:
      return {...state};
  }
}
