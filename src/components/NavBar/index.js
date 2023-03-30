import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {status, score, topScore} = this.props

    return status ? (
      <nav className="nav-container">
        <div className="logo-container1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo-size "
          />
          <h1 className="emojiText">Emoji Game</h1>
        </div>
      </nav>
    ) : (
      <nav className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo-size "
          />
          <h1 className="emojiText">Emoji Game</h1>
        </div>
        <div className="score-container">
          <p className="scoreText">Score: {score}</p>
          <p className="scoreText">Top Score: {topScore}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
