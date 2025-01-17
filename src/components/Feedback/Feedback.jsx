

const Feedback = ({feedBacks}) => {
  return (
      <div>
    <ul>
        <li>Good: {feedBacks.good}</li>
        <li>Neutral: {feedBacks.neutral}</li>
        <li>Bad: {feedBacks.bad}</li>
      </ul>
    </div>
  )
}

export default Feedback