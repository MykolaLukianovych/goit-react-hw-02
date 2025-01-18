import { useState } from "react"
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import Notification from "./components/Notification/Notification"

const App = () => {

  const [feedBacks, setFeedBacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleAddFeedBack = option => {
    if (option === 'good') {
      setFeedBacks(prev => ({...prev, good: prev.good + 1}))
    }
        if (option === 'neutral') {
      setFeedBacks(prev => ({...prev, neutral: prev.neutral + 1}))
        }
        if (option === 'bad') {
      setFeedBacks(prev => ({...prev, bad: prev.bad + 1}))
    }
  };

  const handleResetFeedBack = () => {
    setFeedBacks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedBack = feedBacks.good + feedBacks.neutral + feedBacks.bad; 

  return (
    <div>
      <Description />
      <Options handleAddFeedBack={handleAddFeedBack} totalFeedBack={totalFeedBack} handleResetFeedBack={ handleResetFeedBack } />
      {totalFeedBack !== 0 ? <Feedback feedBacks={feedBacks} totalFeedBack={totalFeedBack} /> : <Notification />}
    </div>
  )
}

export default App
