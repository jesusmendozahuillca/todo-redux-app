import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoModule} from "./todos/todo.module";
import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import {environment} from "../environments/environment";
import {appReducers} from "./app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appReducers,
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          // disabled until https://github.com/ngrx/platform/issues/2109 is resolved
          /* strictActionImmutability: true, */
        },
      }
    ),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/todo-redux-app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
