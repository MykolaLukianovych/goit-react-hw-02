import s from "./Feedback.module.css"

const Feedback = ({feedBacks, totalFeedBack, positiveFeedback}) => {
  return (
      <div className={s.componentWrapper}>
    <ul className={s.list}>
        <li>Good: {feedBacks.good}</li>
        <li>Neutral: {feedBacks.neutral}</li>
        <li>Bad: {feedBacks.bad}</li>
        {totalFeedBack !== 0 && <li>Total: {totalFeedBack}</li>}
        {totalFeedBack !== 0 && <li>Positive: { positiveFeedback }%</li>}
      </ul>
    </div>
  )
}

export default Feedback