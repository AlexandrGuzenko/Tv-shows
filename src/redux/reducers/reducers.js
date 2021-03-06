/* eslint-disable */
import { combineReducers } from 'redux';

import {
  LOAD_CONTENT,
  CHANGE_PAGE,
  SET_MAX_PAGE,
  SET_LOADING,
  IS_NOTHING_FOUND,
  SET_NEW_CONTENT,
  SET_URL,
  SET_CATEGORY,
  SET_QUERY,
  SET_SORT
} from '../constants/constants.js';

export const defaultState = {
  content: [],
  loading: false,
  nothingFound: false,
  url: '',
  category: 'Action',
  sort: {
    sortOn: '',
    direction: '',
  },
  query: '',
  page: 1,
  maxPage: 10,
}

export const otherContent = (state = defaultState,action) => {
	switch(action.type) {
		case CHANGE_PAGE : 
			return Object.assign({}, state, {
				page: action.page
			})
      case SET_MAX_PAGE :
        return Object.assign({}, state, {
        maxPage: action.maxPage
        })
      case SET_LOADING :
        return Object.assign({}, state, {
        loading: action.loading
        })
      case IS_NOTHING_FOUND :
        return Object.assign({}, state, {
        nothingFound: action.nothingFound
        })
      case SET_URL :
        return Object.assign({}, state, {
        url: action.url
        })
      case SET_CATEGORY :
        return Object.assign({}, state, {
        category: action.category
        })
      case SET_QUERY :
        return Object.assign({}, state, {
        query: action.query
        })
      case SET_SORT :
        return Object.assign({}, state, {
        sort: action.sort
        })
		default :
		 return state
	}
}

export const mainContent = (state = defaultState,action) => {
  switch(action.type) {
    case SET_NEW_CONTENT :
    return Object.assign({}, state, {
        content: action.content
      })
    default :
     return state
  }
}


export default combineReducers({
	otherContent,
  mainContent
})
