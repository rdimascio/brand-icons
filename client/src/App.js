import React, { Component } from 'react'
import './App.css'

let icons = [
  {
    'title': 'Adobe',
    'path': 'adobe',
    'tags': 'design'
  },
  {
    'title': 'After Effects',
    'path': 'aftereffects',
    'tags': 'design'
  },
  {
    'title': 'Airbnb',
    'path': 'airbnb',
    'tags': 'marketplace'
  },
  {
    'title': 'Airtable',
    'path': 'airtable',
    'tags': 'tech'
  },
  {
    'title': 'Amazon',
    'path': 'amazon',
    'tags': 'marketplace'
  },
  {
    'title': 'American Express',
    'path': 'amex',
    'tags': 'credit card'
  },
  {
    'title': 'Android',
    'path': 'android',
    'tags': 'tech'
  },
  {
    'title': 'Apple',
    'path': 'apple',
    'tags': 'tech'
  },
  {
    'title': 'Apple Pay',
    'path': 'applepay',
    'tags': 'payment'
  },
  {
    'title': 'AWS',
    'path': 'aws',
    'tags': 'dev'
  },
  {
    'title': 'Bitcoin',
    'path': 'bitcoin',
    'tags': 'crypto'
  },
  {
    'title': 'Codepen',
    'path': 'codepen',
    'tags': 'dev'
  },
  {
    'title': 'Creative Cloud',
    'path': 'creativecloud',
    'tags': 'design'
  },
  {
    'title': "Diner's Club",
    'path': 'dinersclub',
    'tags': 'credit card'
  },
  {
    'title': 'Discover',
    'path': 'discover',
    'tags': 'credit card'
  },
  {
    'title': 'Facebook',
    'path': 'facebook',
    'tags': 'social'
  },
  {
    'title': 'GitHub',
    'path': 'github',
    'tags': 'dev'
  },
  {
    'title': 'Google',
    'path': 'google',
    'tags': 'tech'
  },
  {
    'title': 'Hacker News',
    'path': 'hackernews',
    'tags': 'social'
  },
  {
    'title': 'Illustrator',
    'path': 'illustrator',
    'tags': 'design'
  },
  {
    'title': 'InDesign',
    'path': 'indesign',
    'tags': 'design'
  },
  {
    'title': 'Instagram',
    'path': 'instagram',
    'tags': 'social'
  },
  {
    'title': 'Intercom',
    'path': 'intercom',
    'tags': 'tech'
  },
  {
    'title': 'JCB',
    'path': 'jcb',
    'tags': 'credit card'
  },
  {
    'title': 'JS Fiddle',
    'path': 'jsfiddle',
    'tags': 'dev'
  },
  {
    'title': 'LinkedIn',
    'path': 'linkedin',
    'tags': 'social'
  },
  {
    'title': 'Master Card',
    'path': 'mastercard',
    'tags': 'credit card'
  },
  {
    'title': 'Netflix',
    'path': 'netflix',
    'tags': 'video'
  },
  {
    'title': 'PayPal',
    'path': 'paypal',
    'tags': 'payment'
  },
  {
    'title': 'Photoshop',
    'path': 'photoshop',
    'tags': 'design'
  },
  {
    'title': 'Product Hunt',
    'path': 'producthunt',
    'tags': 'social'
  },
  {
    'title': 'Premiere Pro',
    'path': 'premierepro',
    'tags': 'design'
  },
  {
    'title': 'Reddit',
    'path': 'reddit',
    'tags': 'social'
  },
  {
    'title': 'Slack',
    'path': 'slack',
    'tags': 'tech'
  },
  {
    'title': 'Snapchat',
    'path': 'snapchat',
    'tags': 'social'
  },
  {
    'title': 'Spotify',
    'path': 'spotify',
    'tags': 'social'
  },
  {
    'title': 'Stack Overflow',
    'path': 'stackoverflow',
    'tags': 'dev'
  },
  {
    'title': 'Stripe',
    'path': 'stripe',
    'tags': 'payment'
  },
  {
    'title': 'Tinder',
    'path': 'tinder',
    'tags': 'social'
  },
  {
    'title': 'Trello',
    'path': 'trello',
    'tags': 'tech'
  },
  {
    'title': 'Twitter',
    'path': 'twitter',
    'tags': 'social'
  },
  {
    'title': 'Union Pay',
    'path': 'unionpay',
    'tags': 'credit card'
  },
  {
    'title': 'Visa',
    'path': 'visa',
    'tags': 'credit card'
  },
  {
    'title': 'Vue',
    'path': 'vue',
    'tags': 'dev'
  },
  {
    'title': 'WordPress',
    'path': 'wordpress',
    'tags': 'tech'
  },
  {
    'title': 'YouTube',
    'path': 'youtube',
    'tags': 'video'
  }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: '',
      icons: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.setState({
      icons: icons
    })
    this.refs.search.focus()
  }

  handleChange () {
    this.setState({
      searchString: this.refs.search.value
    })
  }

  render () {
    let _icons = this.state.icons
    let search = this.state.searchString.trim().toLowerCase()

    if (search.length > 0) {
      _icons = _icons.filter(function (icons) {
        return icons.title.toLowerCase().match(search)
      })
    }

    return (

      <div className='App'>
        <header className='site-header drop-in'>
          <div className='container max-width flex justify-between items-center'>
            <div className='site-logo'>
              <a href='/' className='custom-logo-link'>
                <img src="/logo.svg" width="300" alt="Logo" />
              </a>
            </div>
            <div className='menu-primary-container flex items-start justify-center' />
            <div className='flex'>
              <nav id='share' className='social-nav nav items-start flex justify-end'>
                <div className='menu-social-container'>
                  <ul className='social-menu header-font medium smooth gray h5 list-reset'>
                    <li><a href='https://twitter.com/intent/tweet?text=Brand%20Icons%20%E2%80%93%20open%20source%20brand%20icon%20SVGs%20free%20to%20use%20for%20your%20next%20project%20by%20%40dimasc_io%20https%3A%2F%2Fbrandicons.org' target="_blank" rel="noopener noreferrer">Tweet</a></li>
                    <li><a href='https://www.buymeacoffee.com/dimascio' target="_blank" rel="noopener noreferrer">Donate</a></li>
                    <li><a href='https://github.com/rdimascio/icons/' target="_blank" rel="noopener noreferrer">Usage</a></li>
                    <li><a href='https://github.com/rdimascio/icons/' target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className='flex justify-center items-center text-center hero_section'>
            <div className="hero__content">
              <h1>Open Source Collection of Brand Icon SVGs</h1>
              <p>100% free to use on your next project or website.</p>
              <a className='hero__content--button' id='get-started' href='https://github.com/rdimascio/icons/' target="_blank" rel="noopener noreferrer">Get Started</a>&nbsp;<a className='hero__content--button' id='download' href='/icons.zip'>Download</a>
            </div>
        </div>
        <div className="search flex justify-center items-center">
            <input
              type='text'
              value={this.state.searchString}
              ref='search'
              onChange={this.handleChange}
              placeholder='Search Brands'
            />
        </div>
        <div className='grid justify-start items-center'>
          <div className='brand__images brand__images_grid'>
            {_icons.map(l => {
              return (
                <div className="brand__card">
                  <a className='brand__images_image' href={`https://brandicons.org/${l.path}`}>
                    <div style={{ backgroundImage: `url(https://brandicons.org/${l.path})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '4rem'}}></div>
                  </a>
                  <div className='brand__images_info'>
                    <p className='brand__title'>{l.title}</p>
                    <p className='brand__tags'>#{l.tags}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <footer className='flex justify-center'>
            <p className='madeby'>made by <a href='https://twitter.com/intent/follow?screen_name=dimasc_io' target="_blank" rel="noopener noreferrer"> @dimasc_io</a></p>
          {/* <div className='text-center flex justify-center items-center subscibe__form'>
            <div id='revue-embed'>
              <h1 className='subscribe__header'>Get new icons in your inbox</h1>
              <form action='https://www.getrevue.co/profile/brandicons/add_subscriber' method='post' id='revue-form' name='revue-form' >
                <div className='revue-form-group'>
                  <input className='revue-form-field' placeholder='Your email address...' type='email' name='member[email]' id='member_email' />
                </div>
                <div className='revue-form-actions'>
                  <input type='submit' value='Subscribe' name='member[subscribe]' id='member_submit' />
                </div>
              </form>
            </div>
          </div> */}
        </footer>
      </div>
    )
  }
}

export default App
