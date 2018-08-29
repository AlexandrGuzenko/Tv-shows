/* eslint-disable */
import React from 'react';
import { FormControl } from 'react-bootstrap';
import styles from '../css/topBar.css';

const SearchField = ({
  title = 'Trends', search = f => f, changeInput = f => f, query,
}) => (
  <div className={styles.top}>
    <div className={styles.title}>
      <h1>
TV Shows
      </h1>
    </div>

    <div className={styles.searchField}>

      <div className={styles.search}>
        <i
          className={`${styles.fas} fas fa-search`}
          onClick={() => search(`https://api.trakt.tv/search/show?extended=full&query=${query}`, query)}
        />
        <FormControl onChange={changeInput} value={query} />
      </div>
      <h2>
        {title}
      </h2>
    </div>
  </div>
);

export default SearchField;
