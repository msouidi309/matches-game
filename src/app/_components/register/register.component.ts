import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../_models/player';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  playerOneReady = false;
  playerTwoReady = false;
  playerOne = new Player('');
  playerTwo = new Player('');

  constructor(private route: Router) {}

  playerOneIsReady() {
    this.playerOneReady = !this.playerOneReady;
    localStorage.setItem('playerOne', JSON.stringify(this.playerOne));
    if (this.playerTwoReady) {
      this.route.navigateByUrl('game');
    }
  }

  playerTwoIsReady(name) {
    this.playerTwoReady = !this.playerTwoReady;
    localStorage.setItem('playerTwo', JSON.stringify(this.playerTwo));
    if (this.playerOneReady) {
      this.route.navigateByUrl('game');
    }
  }
}
