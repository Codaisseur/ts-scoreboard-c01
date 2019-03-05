import React, { Component } from 'react';
import Player, { IPlayer } from './Player';
import Title from './Title';

import './Scoreboard.css';

interface IScoreboardState {
  players: IPlayer[];
  timerStarted: boolean;
}

export default class Scoreboard extends Component<{}, IScoreboardState> {
  public timer?: any;

  public state: Readonly<IScoreboardState> = {
    timerStarted: false,

    players: [
      {
        id: 1,
        name: 'Arien',
        score: 2,
      },
      {
        id: 2,
        name: 'Mimi',
        score: 5,
      },
      {
        id: 3,
        name: 'Rein',
        score: 4,
      },
    ],
  };

  public componentWillUnmount() {
    this.stopTimer();
  }

  public updatePlayerScore = (id: number, score: number) => {
    this.setState({
      players: this.state.players.map(player => {
        if (player.id === id) {
          return {
            ...player,
            score,
          };
        } else {
          return player;
        }
      }),
    });
  };

  public renderPlayer = (player: IPlayer) => (
    <Player
      key={player.id}
      {...player}
      updatePlayerScore={this.updatePlayerScore}
      timerStarted={this.state.timerStarted}
    />
  );

  public render() {
    const { players, timerStarted } = this.state;

    return (
      <div className="scoreboard">
        <Title content="Scoreboard" />
        <button onClick={this.toggleTimer}>{timerStarted ? 'Stop' : 'Start'}</button>
        <ul>{players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}</ul>
      </div>
    );
  }

  public getRandomPlayer = () => {
    const { players } = this.state;
    return players[Math.floor(Math.random() * players.length)];
  };

  public givePoints = () => {
    const { id, score } = this.getRandomPlayer();

    if (!id) {
      return;
    }

    this.updatePlayerScore(id, score + 1);
  };

  public toggleTimer = () => {
    this.timer ? this.stopTimer() : this.startTimer();
  };

  public startTimer = () => {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(this.givePoints, 1000);
    this.setState({ timerStarted: true });
  };

  public stopTimer = () => {
    if (!this.timer) {
      return;
    }

    clearInterval(this.timer);
    this.timer = undefined;

    this.setState({ timerStarted: false });
  };
}
