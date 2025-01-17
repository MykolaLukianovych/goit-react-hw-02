import { useState } from "react"
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"

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

  return (
    <div>
      <Description />
      <Options handleAddFeedBack={ handleAddFeedBack } />
      <Feedback feedBacks={ feedBacks } />
    </div>
  )
}

export default App
