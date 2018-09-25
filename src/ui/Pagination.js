/* eslint-disable */
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { 
  changePage
} from '../redux/actionCreators/actionCreators';

import styles from '../css/buttons.css';

export const Pagination = ({ curPage, onChange, maxPage }) => {
  const buttonPanel = [];
  let lastPage;
  let firstPage;
  if (curPage < 4) {
    firstPage = 1;
    (maxPage >= 7) ? (lastPage = 7) : (lastPage = maxPage);
  }
  else if (curPage <= maxPage-3) {
    firstPage = curPage - 3;
    lastPage = curPage + 3;
  } 
  else if (curPage > maxPage-3) {
    lastPage = maxPage;
    (lastPage > 8) ? (firstPage = maxPage - 6) : (firstPage = 1);
  }

  for (let i = firstPage; i <= lastPage; i++) {
      buttonPanel.push(
        <Button
          bsSize="large"
          bsStyle={(curPage === i) ? 'success' : 'default'}
          onClick={() => onChange(i)}
          key={i}
        >
          {i}
        </Button>,
      );
    }

  return (
    <div className={(buttonPanel.length < 5) ? styles.smallWrapper : styles.wrapper}>
      <ButtonToolbar>
        <ButtonGroup>
          {buttonPanel}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
};

export default Pagination;