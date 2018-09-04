/* eslint-disable */
import React from 'react';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from '../css/topBar.css';
import { 
  setQuery, 
  urlMaker
} from '../redux/actionCreators/actionCreators.js';

const SearchField = ({
  category, urlMaker, onChangeQuery, query 
}) => { 
  return(
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
          onClick={() => urlMaker(`https://api.trakt.tv/search/show?extended=full&query=${query}`, query)}
        />
        <FormControl onChange={(text) => onChangeQuery(text.target.value)} value={query} />
      </div>
      <h2>
        {category}
      </h2>
    </div>
  </div>
)};

function mapStateToProps (state) {
  return {
    query: state.otherContent.query,
    category: state.otherContent.category,
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    onChangeQuery: (query) => {
      dispatch(setQuery(query))
    },
    urlMaker: (url, category) => {
      dispatch(urlMaker(url, category))
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
