import React from 'react'
import styles from 'styles/Left.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image src="/images/main-logo.png" alt="logo" width={264} height={100} />
    </div>
  )
}

export default Header