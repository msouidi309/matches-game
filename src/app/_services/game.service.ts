import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  playerOne = JSON.parse(localStorage.getItem('playerOne'));
  playerTwo = JSON.parse(localStorage.getItem('playerTwo'));
  random = Math.floor(Math.random() * Math.floor(2)); // Chiffre entre 0 et 1 pour savoir qui commence
  currentPlayer = this.random === 0 ? this.playerOne : this.playerTwo;

  constructor(private http: HttpClient) {}

  getPlayerOne() {
    return this.playerOne;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }

  addPoint() {
    if (this.currentPlayer === this.playerOne) {
      this.playerOne.points++;
      localStorage.setItem('playerOne', JSON.stringify(this.playerOne));
    } else {
      this.playerTwo.points++;
      localStorage.setItem('playerTwo', JSON.stringify(this.playerTwo));
    }
  }

  getCurrentPlayer() {
    return this.currentPlayer.name;
  }

  changeCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }
}
