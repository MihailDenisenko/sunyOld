import React from 'react'
import styles from './Helper.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setShowHelper } from '../../reduce/width'

export default function Helper() {
  const dispatch = useDispatch()
    const { showHelper } = useSelector((state) => state.width);
  
  return (
    <div className={styles.helper}>
      <h1>Здесь Будет форма для звонка на фирму </h1>
      <img className={styles.helper__close}
        onClick={()=>dispatch(setShowHelper(false))}
        src="https://avatars.mds.yandex.net/i?id=1574cb19b55fdf56d046cf90ee34b3c45c1e4c10-12147736-images-thumbs&n=13"
        alt=""
      />
    </div>
  );
}
