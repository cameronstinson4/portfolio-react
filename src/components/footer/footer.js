import React from 'react'

import styles from './footer.module.scss'

const Footer = () => (
  <div>
    <div className={styles.footerContainer}>
      <h3> Contact Me </h3>
      <div className={styles.contactList}>
        <div className={styles.contactItem}>
          <a className={styles.contactLink} href="mailto:cameronstinson4@gmail.com">email:cameronstinson4@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <a className={styles.contactLink} href="https://www.linkedin.com/in/cameron-stinson-16aa76106">linkedin:cameron-stinson</a>
        </div>
        <div className={styles.contactItem}>
          <a className={styles.contactLink} href="https://github.com/cameronstinson4">github:cameronstinson4</a>
        </div>
        <div className={styles.contactItem}>
          <a className={styles.contactLink} href="tel:757-726-3535">tel:757-726-3535</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
