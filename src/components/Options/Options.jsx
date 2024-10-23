
import css from './Options.module.css'
import Button from '../Button/Button';

export default function Options({ totalFeedback, updateFeedback, reset, }) {
  return (
      <ul className={css.optUl} >
      <li><Button name='good' onClick={updateFeedback}>Good</Button></li>
      <li><Button name='neutral' onClick={updateFeedback}>Neutral</Button></li>
      <li><Button name='bad' onClick={updateFeedback}>Bad</Button></li>
      {totalFeedback > 0 && <li onClick={reset}><Button>Reset</Button></li>}
        </ul>
  );
};

