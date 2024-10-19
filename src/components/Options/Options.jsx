

import css from './Options.module.css'

export default function Options(func) {
  // function handleClick(event) {
  //   // alert("I'm a button!")
  //   console.log(event)
  // }
  return (
    <>
      <div className={css.optDiv}>
        <button className={css.button} onClick={func}>Good</button>
        <button className={css.button}>Neutral</button>
        <button className={css.button}>Bad</button>
        <button className={css.button}>Reset</button>
      </div>
    </>
  );
};

