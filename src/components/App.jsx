import {useState, useEffect} from  'react' ;
// import reactLogo from './assets/react.svg'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification';

import './App.css'

export default function App() {
  const [clicks, setClicks] = useState(
  {
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const { good, neutral, bad,} = clicks

  const totalFeedback = good + neutral + bad

  const updateFeedback = feedbackType => {
    const indicator = feedbackType.target.name
    if (indicator === 'good') {
      setClicks({
      ...clicks,
      good: good + 1
      })
    } else if (indicator === 'neutral'){
      setClicks({
      ...clicks,
      neutral: neutral + 1
    })
    } else if (indicator === 'bad'){
      setClicks({
      ...clicks,
      bad: bad + 1
    })
    }
  }
    useEffect(() => {
    window.localStorage.setItem("feedback-data", JSON.stringify({clicks}));
    }, [clicks]);

  
  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad : 0,
    })
  }
  
  useState ( () => {
    const savedClicks = window . localStorage . getItem ( "feedback-data" );
    if (savedClicks !== null ) {
      return  JSON.parse(savedClicks);
    }
    return  0 ;
  });

  return (
    <>
  	  <Description/>
      <Options 
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? <Feedback 
                good={good}
                neutral={neutral}
                bad={bad}
        totalFeedback={totalFeedback}
      /> : <Notification>No feedback yet</Notification>}
    </>
  )
}
  

