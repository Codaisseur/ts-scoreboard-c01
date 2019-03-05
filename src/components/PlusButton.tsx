import React, { Component } from 'react';
import './PlusButton.css';

export interface IPlusButtonProps {
  onClick: (event?: any) => void;
}

export default class PlusButton extends Component<IPlusButtonProps> {
  public render() {
    return (
      <button onClick={this.props.onClick} className="plus-button">
        +
      </button>
    );
  }
}
