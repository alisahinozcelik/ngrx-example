import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AppTodoLoad, AppActions, AppTodoLoading } from './app.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {
  @Effect()
  setLoadingForTodos$: Observable<Action> = this.actions$.pipe(
    ofType(AppActions.AppTodoLoad),
    mergeMap(action => of(new AppTodoLoading()))
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
