import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    list: this.props,
    emojiItemList: [],
    status: '',
    score: 0,
    topScore: 0,
  }

  clickPlayAgain = (response, val) => {
    this.setState({status: !response})
    this.setState({score: 0})
    this.setState({emojiItemList: []})
    if (val > 12) {
      this.setState({topScore: 0})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  userClick = id => {
    const emojiList = this.shuffledEmojisList()
    this.setState({list: {emojisList: emojiList}})
    const newList = {
      id,
    }
    this.setState(prevState => ({
      emojiItemList: [...prevState.emojiItemList, newList],
    }))

    const {emojiItemList} = this.state

    const uniq = emojiItemList.map(each => each.id === id)
    const isStatus = uniq.some(each => each)
    this.setState({status: isStatus})

    const {status} = this.state
    if (status !== true) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({topScore: prevState.topScore + 1}))
    }
  }

  render() {
    const {list} = this.state
    const {emojisList} = list
    const {status, score, topScore} = this.state

    console.log(status)
    return status ? (
      <div className="bg-container">
        <div>
          <NavBar status={status} />
        </div>
        <div>
          <WinOrLoseCard
            topScore={topScore}
            score={score}
            status={status}
            clickPlayAgain={this.clickPlayAgain}
          />
        </div>
      </div>
    ) : (
      <div className="bg-container">
        <div>
          <NavBar score={score} topScore={topScore} />
        </div>
        <ul className="cardItem-container">
          {emojisList.map(each => (
            <EmojiCard
              emojiCardItems={each}
              key={each.id}
              userClick={this.userClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
