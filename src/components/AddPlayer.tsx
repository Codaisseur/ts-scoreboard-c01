import React, { Component } from 'react';

export interface IAddPlayerProps {
  onSubmit: (name: string) => any;
}

interface IAddPlayerState {
  name: string;
}

export default class AddPlayer extends Component<IAddPlayerProps, IAddPlayerState> {
  public state: IAddPlayerState = { name: '' };

  public render() {
    const { name } = this.state;

    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  private handleChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
}
