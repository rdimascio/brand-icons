import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      icons: false
    }
  }
  componentDidMount = () => {
    fetch(`http://localhost:3001/data/brands.json`).then(data => data.json()).then(data => {
      this.setState({
        icons: data.brands
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header>Brand Icons</header>
        {
          this.state.icons && <ul>
            {this.state.icons.map(icon => (
              <li key={icon.title}>
                <img src={`http://localhost:3001/${icon.path}`} alt={icon.title}/>
                <h3>{icon.title}</h3>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default App;
