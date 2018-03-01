import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.onNewItemChange = this.onNewItemChange.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Ma TODO list:</h2>
        <div>
          <span>ajouter: </span>
          <input type="text" onChange={this.onNewItemChange} />
        </div>
        <br />

        <ul>
          {this.state.list.map((item, index) => {
            <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
