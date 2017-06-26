import React from 'react'
import 'normalize.css'

import Header from './Header'
import styles from '../styles/styles.styl'

export default props => (
  <div>
    <Header />

    <div className='body'>
      {props.children}
    </div>
  </div>
)