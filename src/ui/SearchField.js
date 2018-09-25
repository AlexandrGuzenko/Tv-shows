/* eslint-disable */
import React from 'react';
import { FormControl } from 'react-bootstrap';

import styles from '../css/topBar.css';

export const SearchField = ({ category, urlMaker, onChangeQuery, query }) => { 
  return(
  <div className={styles.top}>
    <div className={styles.title}>
      <h1>
        TV Shows
      </h1>
    </div>
    <div className={styles.searchField}>
      <div className={styles.search}>
        <i className={`${styles.fas} fas fa-search`}
           onClick={() => query && urlMaker(`https://api.trakt.tv/search/show?extended=full&query=${query}`, query)}/>
        <FormControl onChange={(text) => onChangeQuery(text.target.value)} value={query} />
      </div>
      <h2>
        {category}
      </h2>
    </div>
  </div>
)}

export default SearchField
