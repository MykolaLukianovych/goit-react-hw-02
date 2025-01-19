import s from "./Feedback.module.css"

const Feedback = ({feedBacks, totalFeedBack}) => {
  return (
      <div className={s.componentWrapper}>
    <ul className={s.list}>
        <li>Good: {feedBacks.good}</li>
        <li>Neutral: {feedBacks.neutral}</li>
        <li>Bad: {feedBacks.bad}</li>
        {totalFeedBack !== 0 && <li>Total: {totalFeedBack}</li>}
        {totalFeedBack !== 0 && <li>Positive: {Math.round((feedBacks.good / totalFeedBack) * 100)}%</li>}
      </ul>
    </div>
  )
}

export default Feedback