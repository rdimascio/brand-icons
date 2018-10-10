import React, { Component } from 'react';

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
        <header className="site-header drop-in">
          <div className="container max-width flex justify-between items-center">
            <div className="site-logo">
              <a href="/" className="custom-logo-link">
                Brand Icons
              </a>
            </div>
            <div className="menu-primary-container flex items-center justify-center">
              <form>
                <label>
                  <input type="text" name="name" placeholder="Search" />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="flex items-center">
              <nav id="share" class="social-nav nav flex items-center justify-end">
                <div className="menu-social-container">

                  <ul className="social-menu header-font medium smooth gray h5 list-reset">

                    <li><a href="https://github.com/rdimascio/brandicons" target="_blank" rel="noopener noreferrer"><img src="http://localhost:3001/github" width="22" alt="View us on GitHub" /></a></li>
                    <li><a href="https://twitter.com/brandicons" target="_blank" rel="noopener noreferrer"><img src="http://localhost:3001/twitter" width="22" alt="Say Hi on Twitter" /></a></li>

                  </ul>

                </div>
              </nav>
            </div>
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
        <footer className="flex justify-center">
          <div className="text-center flex justify-center items-center subscibe__form">
            <div id="revue-embed">
              <h1 className="subscribe__header">Get new icons in your inbox</h1>
              <form action="https://www.getrevue.co/profile/brandicons/add_subscriber" method="post" id="revue-form" name="revue-form" >
              <div className="revue-form-group">
                <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
              </div>
              <div className="revue-form-actions">
                <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
              </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
