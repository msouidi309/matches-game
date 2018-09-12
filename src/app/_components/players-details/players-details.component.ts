import { Component, OnInit } from '@angular/core';
import {GameService} from '../../_services/game.service';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {

  playerOne = null;
  playerTwo = null;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.playerOne = this.gameService.getPlayerOne();
    this.playerTwo = this.gameService.getPlayerTwo();
  }

}
