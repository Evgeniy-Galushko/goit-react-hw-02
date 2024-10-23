import css from './Feedback.module.css'
import { ImCrying } from 'react-icons/im';
import { ImNeutral } from "react-icons/im";
import { SlEmotsmile } from "react-icons/sl";

export default function Feedback({ good, neutral, bad, totalFeedback}) {
  const positive = Math.round((good / totalFeedback) * 100)
  function textСolor() {
  if (positive <= 33) {
    return "red"
  } else if (positive <= 66) {
    return "orange" 
  }else if (positive >= 67) {
    return "green" 
    }
  }

  function icons() {
  if (positive <= 33) {
    return <ImCrying size={20}/>
  } else if (positive <= 66) {
    return <ImNeutral size={20}/> 
  }else if (positive >= 67) {
    return <SlEmotsmile size={20}/> 
    }
  }
  
  return (
    <div className={css.divResult}>
      <ul>
        <li><p className={css.resultParagraph}>Good: {good}</p></li>
        <li><p className={css.resultParagraph}>Neutral: {neutral} </p></li>
        <li><p className={css.resultParagraph}>Bad: {bad} </p></li>
        <li><p className={css.resultParagraph}>Total: {totalFeedback} </p></li>
        <li><p className={css.resultParagraph} >Positive: <span style={{ color: textСolor(positive) }}>{positive}% {icons(positive)}</span></p></li>
      </ul>
  </div>
  )
}