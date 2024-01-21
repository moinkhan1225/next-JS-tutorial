import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Hakai</div>
      <div className={styles.text}>Hakai thoughts Agency  all rights reserved</div>
    </div>
  )
}

export default Footer