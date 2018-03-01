import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrote: '',
      list: [],
    };

    this.onNewItemChange = this.onNewItemChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Ma TODO list:</h2>
        <div>
          <span>ajouter: </span>
          <input type="text" onChange={this.onNewItemChange} />
          <button onClick={this.addItem}>ajouter</button>
        </div>
        <br />

        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

  onNewItemChange(event) {
    this.setState({ wrote: event.target.value });
  }

  addItem() {
    const previousList = this.state.list;
    const newItem = this.state.wrote;
    const newList = [...previousList, newItem];

    this.setState({ list: newList });
  }
}

render(<App />, document.getElementById('root'));
