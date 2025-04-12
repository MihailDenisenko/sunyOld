import React from 'react'
import styles from "./Search.module.scss"
import { useSelector } from 'react-redux'

export default function Search() {

    const {width} = useSelector(state=> state.width)
  
  return (
    <div className={styles.search}>
      {width < 400 ? (
        ''
      )
        :
        (
        ''
      )}
    </div>
  )
}
