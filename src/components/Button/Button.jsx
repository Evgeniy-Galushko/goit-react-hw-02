import css from './Button.module.css'
export default function Button({name, onClick, children}) {
  
  return (
    <>
      <button className={css.button} type='button' name={name} onClick={onClick}>{children}</button>
    </>
  )
}