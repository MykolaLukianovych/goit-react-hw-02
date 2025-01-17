

const Options = ({handleAddFeedBack}) => {
  return (
      <div>
        <button onClick={() => handleAddFeedBack('good')}>Good</button>
      <button onClick={() => handleAddFeedBack('neutral')}>Neutral</button>
      <button onClick={() => handleAddFeedBack('bad')}>Bad</button>

    </div>
  )
}

export default Options