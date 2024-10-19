import css from './Feedback.module.css'

export default function TFeedback() {
  return (
    <div className={css.divResult}>
      <p className={css.resultParagraph}>Good:</p>
      <p className={css.resultParagraph}>Neutral:</p>
      <p className={css.resultParagraph}>Bad:</p>
    <p className={css.resultParagraph}>Total:</p>
    <p className={css.resultParagraph}>Positive:</p>
  </div>
  )
}