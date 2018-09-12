import { Action } from '@ngrx/store';
import { TodoModel } from './app.reducers';

export enum AppActions {
  AppTodoLoad = '[App] Todo Load',
  AppTodoLoading = '[App] Todo Loading',
  AppTodoLoadSuccess = '[App] Todo Load Success',
  AppTodoLoadFail = '[App] Todo Load Fail',
}

export class AppTodoLoad implements Action {
  public readonly type: AppActions = AppActions.AppTodoLoad;
}

export class AppTodoLoading implements Action {
  public readonly type: AppActions = AppActions.AppTodoLoading;
}

export class AppTodoLoadSuccess implements Action {
  public readonly type: AppActions = AppActions.AppTodoLoadSuccess;

  constructor(
    public payload: TodoModel[]
  ) {
  }
}

export class AppTodoLoadFail implements Action {
  public readonly type: AppActions = AppActions.AppTodoLoadFail;

  constructor(
    public payload: any
  ) {
  }
}

export type AppTodoActions = AppTodoLoad | AppTodoLoading | AppTodoLoadSuccess | AppTodoLoadFail;
