import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { ListComponent } from './list/list.component';
import { ApiService } from './list/api.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './state/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: reducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
