import s from "./Options.module.css"

const Options = ({handleAddFeedBack, totalFeedBack, handleResetFeedBack}) => {
  return (
      <div className={s.componentWrapper}>
        <button onClick={() => handleAddFeedBack('good')}>Good</button>
      <button onClick={() => handleAddFeedBack('neutral')}>Neutral</button>
      <button onClick={() => handleAddFeedBack('bad')}>Bad</button>
      {totalFeedBack !== 0 && <button onClick={() => handleResetFeedBack()}>Reset</button>}
    </div>
  )
}

export default Options