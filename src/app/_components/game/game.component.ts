import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Match} from '../../_models/match';
import {GameService} from '../../_services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('matchState', [
      state('notBurnt', style({
        transform: 'scale(0.8)'
      })),
      state('burnt',   style({
        opacity: 0
      })),
      transition('notBurnt => burnt', animate('100ms ease-in')),
      transition('burnt => notBurnt', animate('100ms ease-out'))
    ])
  ]
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  matches: Match[] = [];
  random = 0;
  chosenMatches = 0;
  i = 0;
  playerOne = null;
  playerTwo = null;
  totalBurnt = 0;

  ngOnInit() {
    this.random = Math.floor(Math.random() * 20) + 5;
    this.playerOne = this.gameService.getPlayerOne();
    this.playerTwo = this.gameService.getPlayerTwo();
    for (this.i = 0; this.i < this.random; this.i++) {
      this.matches.push(new Match());
    }
  }

  chooseMatches(match) {
    this.totalBurnt++;
    console.log('TOTAL BURNT ' + this.totalBurnt)
    if (this.totalBurnt === (this.random - 1)) {
      this.gameService.addPoint();
    }
    if (this.chosenMatches === 2) {
      this.gameService.changeCurrentPlayer();
      this.chosenMatches = 0;
    } else {
      this.chosenMatches++;
    }
    match.state = match.state === 'burnt' ? 'notBurnt' : 'burnt';
  }

  burnMatches() {
    this.gameService.changeCurrentPlayer();
    this.chosenMatches = 0;
  }

  getCurrentPlayer() {
    return this.gameService.getCurrentPlayer();
  }

  refreshComponent() {
    location.reload();
  }
}
