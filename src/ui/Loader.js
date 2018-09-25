/* eslint-disable */
import React from 'react';

import styles from '../css/App.css';

const Loader = () => (
	<div className={styles.loader}>
	  <div className={styles.lds}><div /><div /><div /></div>
	</div>
)

export default Loader;
