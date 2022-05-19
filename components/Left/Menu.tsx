import React from 'react'
import styles from 'styles/Left.module.scss'

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <ul>
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li>
          <ul>
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 2</a></li>
          </ul>
        </li>
        <li><a href="">Item 5</a></li>
      </ul>
      <ul>
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
      </ul>
      <ul className={styles.social}>
        <li><a href="">F</a></li>
        <li><a href="">I</a></li>
        <li><a href="">E</a></li>
      </ul>
    </div>
  )
}

export default Menu