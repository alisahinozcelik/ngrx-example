import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromTodos from '../state/app.reducers';
import { AppTodoLoad } from '../state/app.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public loading = false;

  constructor(
    public store: Store<fromTodos.State>
  ) { }

  ngOnInit() {
    this.store.select(fromTodos.getLoading).subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    });

    this.store.dispatch(new AppTodoLoad());
  }
}
