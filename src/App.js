/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './css/App.css';
import Loader from './ui/Loader';
import TableShows from './ui/TableShows';
import Pagination from './ui/Pagination';
import SearchField from './ui/SearchField';
import Categories from './ui/Categories';
import { 
  urlMaker,
  sortFun,
  setQuery,
  changePage 
} from './redux/actionCreators/actionCreators.js'

class App extends Component {

  componentDidMount() {
    this.props.urlMaker('https://api.trakt.tv/shows/popular?extended=full&limit=10&genres=action', 'Action');
  }

  render() {
    const { nothingFound, loading, content, page, query, category, maxPage } = this.props;
    const { onChangeQuery, sortFun, urlMaker, onChangePage } = this.props;
    let MainTable;
    if(loading) { 
      MainTable = <Loader />;
    } 
    else if(nothingFound) {
      MainTable = <h1 className={styles.nothing}>
                    Nothing was found
                  </h1>
    } else {
      MainTable = <div className={styles.content}>
                    <TableShows content={content} page={page} sortFun={(sort) => sortFun(sort)}/>
                    <Pagination curPage={page} 
                                maxPage={maxPage}
                                onChange={onChangePage} />
                  </div>
    }

    return (
      <div className={styles.app}>
        <SearchField query={query}
                     category={category}
                     onChangeQuery={onChangeQuery}
                     urlMaker={urlMaker} />
        <Categories onClick={urlMaker}/>
        { MainTable }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    page: state.otherContent.page,
    loading: state.otherContent.loading,
    nothingFound: state.otherContent.nothingFound,
    content: state.mainContent.content,
    query: state.otherContent.query,
    category: state.otherContent.category,
    maxPage: state.otherContent.maxPage
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    urlMaker: (url, category) => {
      dispatch(urlMaker(url, category))
    },
    sortFun: (url, category) => {
      dispatch(sortFun(url, category))
    },
    onChangeQuery: (query) => {
      dispatch(setQuery(query))
    },
    onChangePage: (page) => {
      dispatch(changePage(page))
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


/*
          КАК ИЗБАВИТЬСЯ ОТ [object Object] что бы посмотреть содержимое ????????
          Хорошая ли практика использования глобальных переменных при тестировании?
          как получить из одного this доступ к другому this (например в функции xmlHttpRequest один зис а мне надо сетстэйт вызвать)
          как лучше сделать, когда нужно параллельно получить от разных серверов данные для перерисовки одной и той же части контента (когда использовать сет стэйт)
*/