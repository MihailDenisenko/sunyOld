import React from 'react'
import styles from './MainService.module.scss'
import { useSelector } from 'react-redux'


export default function MainServiceLi({ text, logo, body, isNew }) {
  const { service } = useSelector((state) => state.service);
  const [showBody, setShowBody] = React.useState(false);

  return (
    <div>
      <div className={styles.item}>
        {isNew ? (
          <img className={styles.item__isNew} src="https://avatars.mds.yandex.net/i?id=fb3e4b3b03fd2c60aeb20e6e999e0eaddceb9d19-4032519-images-thumbs&n=13" />
        ) : (
          ""
        )}
        <h4 className={styles.item__title}>{text}</h4>
        <img
          onClick={() => {
            setShowBody(!showBody);
            setTimeout(() => {
              setShowBody(false);
            }, 5000);
          }}
          className={styles.item__img}
          src={logo}
          alt=""
        />
        <p className={!showBody ? styles.item__body : styles.item__bodyShow}>
          {body}
        </p>
        <div className={styles.item__button}>Подробнее</div>
      </div>
    </div>
  );
}
