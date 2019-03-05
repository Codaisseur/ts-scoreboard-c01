import React, { Component } from 'react';
import './Player.css';
import PlusButton from './PlusButton';

export interface IPlayer {
  id?: number;
  name: string;
  score: number;
}

export interface IPlayerProps extends IPlayer {
  updatePlayerScore: (id: number, score: number) => void;
  timerStarted: boolean;
}

export default class Player extends Component<IPlayerProps> {
  public static defaultProps = {
    score: 0,
  };

  public handleUpdate = () => {
    const { id, score } = this.props;

    if (!id) {
      return;
    }

    this.props.updatePlayerScore(id, score + 1);
  };

  public render() {
    const { name, score, timerStarted } = this.props;

    return (
      <li className="player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        {!timerStarted && <PlusButton onClick={this.handleUpdate} />}
      </li>
    );
  }
}
