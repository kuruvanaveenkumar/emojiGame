import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {topScore, status, clickPlayAgain} = this.props

    const onCLickPlayAgainButton = () => {
      clickPlayAgain(status, topScore)
    }

    let d
    if (status) {
      if (topScore > 12) {
        d = (
          <div className="card-container">
            <div className="win-card">
              <div>
                <h1 className="won-heading">You Won</h1>
                <p className="best-score">Best Score</p>
                <p className="score-n">{topScore}/12</p>
                <button
                  type="button"
                  className="playAgain-button"
                  onClick={onCLickPlayAgainButton}
                >
                  Play Again
                </button>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win"
                className="img-size"
              />
            </div>
          </div>
        )
      } else {
        d = (
          <div className="card-container">
            <div className="win-card">
              <div>
                <h1 className="won-heading">You Lose</h1>
                <p className="best-score">Score</p>
                <p className="score-n">{topScore}/12</p>
                <button
                  type="button"
                  className="playAgain-button"
                  onClick={onCLickPlayAgainButton}
                >
                  Play Again
                </button>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="lose"
                className="img-size"
              />
            </div>
          </div>
        )
      }
    }

    return <div>{d}</div>
  }
}

export default WinOrLoseCard
