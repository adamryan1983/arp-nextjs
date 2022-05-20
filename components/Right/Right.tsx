import React from 'react'
import styles from 'styles/Right.module.scss'
import Gallery from './Gallery'


const Right = () => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.imageContainer}>
        <Gallery />
      </div>
    </div>
  )
}

export default Right