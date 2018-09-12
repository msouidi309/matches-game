import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './_components/register/register.component';
import { GameComponent } from './_components/game/game.component';
import { PlayersDetailsComponent } from './_components/players-details/players-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GameComponent,
    PlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
