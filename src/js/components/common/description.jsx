import React from 'react';

export default class Description extends React.Component {
  constructor(props) {
    super(props);

    this.description = 'Hey there! I am Shashwat, a 3rd year undergraduate pursuing B.Tech. Computer Science & Engineering at Indian Institute of Technology, Jodhpur.';

    this.state = {
      index: 0,
      description: ''
    };
  }

  componentDidMount() {
    setInterval(() => {
        if (this.state.index > this.description.length) return;
        var blink = this.state.index % 2 === 0 ? '|' : '';
        var toDisplay = this.description.slice(0,  this.state.index) + blink;

        this.setState({
          index: this.state.index + 1,
          description: toDisplay
        });
    }, 40);
  }

  render() {
    return (
      <h1 id='my-description' class='main-title'>
        {this.state.description}
      </h1>
    );
  }
}
