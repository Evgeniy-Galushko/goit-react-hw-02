import {useState, useEffect} from  'react' ;
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import './App.css'

export default function App() {
  const [clicks, setClicks] = useState({ 
    good: 0,
    neutral: 0,
    bad: 0,
  })

    const updateGood = () => {
      setClicks({
      ...clicks,
  		good: clicks.good + 1
  	});
  };

  
  
    // const updateFeedback = feedbackType => {
    // Здесь используй сеттер, чтобы обновить состояние
  // }

  return (
  	<>
  		<Description/>
      <Options updateGood = {updateGood} />
      <Feedback/>
    </>
  )
}
  

