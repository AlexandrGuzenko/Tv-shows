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
} from '../redux/actionCreators/actionCreators.js';

import styles from '../css/buttons.css';

const ButtonNavigation = ({ curPage, onChange, maxPage }) => {
  const buttonPanel = [];

  if (maxPage < 7) {
    for (let i = 0; i < maxPage; i++) {
      buttonPanel.push(
        <Button
          bsSize="large"
          bsStyle={(curPage === i + 1) ? 'success' : 'default'}
          onClick={() => onChange(i + 1)}
          key={i}
        >
          {i + 1}
        </Button>,
      );
    }
  } else if (curPage < 4) {
    for (let i = 0; i < 7; i++) {
      buttonPanel.push(
        <Button
          bsSize="large"
          bsStyle={(curPage === i + 1) ? 'success' : 'default'}
          onClick={() => onChange(i + 1)}
          key={i}
        >
          {i + 1}
        </Button>,
      );
    }
  } else if (curPage < maxPage - 3) {
    for (let i = -3; i < 4; i++) {
      buttonPanel.push(
        <Button
          bsSize="large"
          bsStyle={(curPage === curPage + i) ? 'success' : 'default'}
          onClick={() => onChange(curPage + i)}
          key={i}
        >
          {curPage + i}
        </Button>,
      );
    }
  } else {
    for (let i = maxPage - 6; i <= maxPage; i++) {
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

function mapStateToProps (state) {
  return {
    curPage: state.otherContent.page,
    maxPage: state.otherContent.maxPage,
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    onChange: (page) => {
      dispatch(changePage(page))
    },    
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonNavigation);
