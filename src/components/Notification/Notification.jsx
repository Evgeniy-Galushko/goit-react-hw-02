import css from './Notification.module.css'

export default function Notification({children}) {

  return (
      <p className={css.paragraph}>{children}</p>
  );
};

