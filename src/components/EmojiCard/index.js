import './index.css'

const EmojiCard = props => {
  const {emojiCardItems, userClick} = props
  const {id, emojiName, emojiUrl} = emojiCardItems

  const onButton = () => {
    userClick(id)
  }

  return (
    <li>
      <button type="button" className="button-style" onClick={onButton}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
