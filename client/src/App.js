import React, { Component } from 'react'
import './App.css'

let icons = [
  {
    'title': 'Amazon',
    'path': 'amazon',
    'tags': 'e-commerce'
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
    'title': 'PayPal',
    'path': 'paypal',
    'tags': 'payment'
  },
  {
    'title': 'Product Hunt',
    'path': 'producthunt',
    'tags': 'social'
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
    'tags': 'social'
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
                <h1>Brand Icons</h1>
              </a>
            </div>
            <div className='menu-primary-container flex items-center justify-center' />
            <div className='flex items-center'>
              <nav id='share' className='social-nav nav flex items-center justify-end'>
                <div className='menu-social-container'>

                  <ul className='social-menu header-font medium smooth gray h5 list-reset'>
                    <li><a href='https://github.com/rdimascio/brand-icons' target='_blank' rel='noopener noreferrer'><img src='/github' width='22' alt='View us on GitHub' /></a></li>
                  </ul>

                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className='flex justify-center items-center text-center hero_section'>
          <form>
            <h1>A Curated Collection of Brand Icons</h1>
            <p>Download or link to any brand SVG for free. An open-source project maintained by <a href='https://twitter.com/intent/follow?screen_name=dimasc_io' target='_blank' rel='noopener noreferrer'>@dimasc_io</a></p>
            <input
              type='text'
              value={this.state.searchString}
              ref='search'
              onChange={this.handleChange}
              placeholder='Search by brand name'
            />
          </form>
        </div>
        <div className='grid justify-start items-center'>
          <ul className='brand__images brand__images_grid'>
            {_icons.map(l => {
              return (
                <li>
                  <a className='brand__images_image' href={`/${l.path}`}>
                    <img src={`/${l.path}`} alt={l.title} />
                  </a>
                  <div className='brand__images_info'>
                    <p>{l.title}</p>
                    <p>#{l.tags}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <footer className='flex justify-center'>
          <div className='text-center flex justify-center items-center subscibe__form'>
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
          </div>
        </footer>
      </div>
    )
  }
}

export default App
