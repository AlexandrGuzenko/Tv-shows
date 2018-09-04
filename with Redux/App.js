/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './css/App.css';
import ListRow from './ui/ListRow.js';
import ButtonNavigation from './ui/ButtonNavigation.js';
import SearchField from './ui/SearchField.js';
import Categories from './ui/Categories.js';
import { 
  urlMaker,
  sortFun
} from './redux/actionCreators/actionCreators.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.urlMaker('https://api.trakt.tv/shows/popular?extended=full&limit=10&genres=action', 'Action');
  }

  render() {
    const { nothingFound, loading, sortFun, content, page } = this.props;
    return (
      <div className={styles.app}>
        <SearchField />
        <Categories />
        { (loading) // если идет загрузка контента
          ? 
            <div className={styles.loader}>
  <div className={styles.lds}><div></div><div /><div /></div>
            </div>
          : (nothingFound) // если ничего не найдено
            ? 
              <h1 className={styles.nothing}>
Nothing was found
              </h1>
            :   //если контент загружен
<div className={styles.content}>
  <table className={styles.table}>
              <thead>
                <tr>
                  <th>
#
                  </th>
                  <th className={styles.poster}>
Poster
                  </th>
                  <th>
Title/Description
                  </th>
                  <th
                    className={styles.sort}
                    onClick={() => sortFun('year')}
                  >Year
                  </th>
                  <th
                    className={styles.sort}
                    onClick={() => sortFun('rating')}
                  >Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.map((item, index) =>{
                  return(
                  <ListRow key={item.ids.tvdb} 
                           title={item.title} 
                           year={item.year} 
                           id={item.url} 
                           number={index}
                           rating={item.rating}
                           page={page}
                           overview={item.overview}/>
                  )
                } 
                )}
              </tbody>
            </table>
  <ButtonNavigation />
</div>
}
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
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    urlMaker: (url, category) => {
      dispatch(urlMaker(url, category))
    },
    sortFun: (url, category) => {
      dispatch(sortFun(url, category))
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


/*
          КАК ИЗБАВИТЬСЯ ОТ [object Object] что бы посмотреть содержимое ????????
          как получить из одного this доступ к другому this (например в функции xmlHttpRequest один зис а мне надо сетстэйт вызвать)
          как лучше сделать, когда нужно параллельно получить от разных серверов данные для перерисовки одной и той же части контента (когда использовать сет стэйт)
*/