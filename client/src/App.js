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
        <header>
          <div className="navbar">

          </div>
        </header>
          <div className="grid justify-start items-center">
            {
              this.state.icons && <ul className="brand__images brand__images_grid">
                {this.state.icons.map(icon => (
                  <li key={icon.title}>
                    <a className="brand__images_image" href={`http://localhost:3001/${icon.path}`}>
                      <img src={`http://localhost:3001/${icon.path}`} alt={icon.title}/>
                    </a>
                    <div className="brand__images_info">
                      <h2>{icon.title}</h2>
                      <p>#{icon.tags}</p>
                    </div>
                  </li>
                ))}
              </ul>
            }
          </div>
        <footer>
          <div className="">
            
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
