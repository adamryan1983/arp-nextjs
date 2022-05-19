import React from 'react'
import styles from 'styles/Left.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.nav}>
        <a href='/'>prev</a> / <a href='/'>next</a>
      </div>
      <div className={styles.thumbnails}>
        <a href="">show thumbnails</a>
      </div>
    </div>
  )
}

export default Footer