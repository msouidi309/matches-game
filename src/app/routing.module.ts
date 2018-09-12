import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GameComponent } from './_components/game/game.component';
import {RegisterComponent} from './_components/register/register.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent },
  {
    path: '',
    component: RegisterComponent
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
