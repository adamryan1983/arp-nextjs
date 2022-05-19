import React from 'react'
import styles from 'styles/Left.module.scss'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'


const Left = () => {
  return (
    <div className={styles.leftContainer}>
      <Header />
      <Menu />
      <Footer />
  </div>
  )
}

export default Left