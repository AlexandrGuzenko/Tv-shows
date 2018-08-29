/* eslint-disable */
import React, { Component } from 'react';
import styles from './css/App.css';

import ListRow from './ui/ListRow.js';
import ButtonNavigation from './ui/ButtonNavigation.js';
import SearchField from './ui/SearchField.js';
import Categories from './ui/Categories.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
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
      chooseShow: false,
      page: 1,
      maxPage: '',
    };
  }

  changePage(page) {
    if (page !== this.state.page) {
      this.setState({ page });
      this.loadContent(`${this.state.url}&page=${page}`);
    }
  }

  sortFun(selector) { 
    const newContent = [...this.state.content];
    if (this.state.sort.direction === 'up' && selector === this.state.sort.sortOn) {
      const newSort = {
        sortOn: selector,
        direction: 'down',
      };
      if (selector === 'year') {
        newContent.sort((a, b) => {
          if (a.year > b.year) return 1;
          if (a.year < b.year) return -1;
        });
      } else if (selector === 'rating') {
        newContent.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
        });
      }
      this.setState({ sort: newSort });
    } else {
      if (selector === 'year') {
        newContent.sort((a, b) => {
          if (a.year > b.year) return -1;
          if (a.year < b.year) return 1;
        });
      } else if (selector === 'rating') {
        newContent.sort((a, b) => {
          if (a.rating > b.rating) return -1;
          if (a.rating < b.rating) return 1;
        });
      }
      const newSort = {
        sortOn: selector,
        direction: 'up',
      };
      this.setState({ sort: newSort });
    }
    this.setState({ content: newContent });
  }

  urlMaker(url, query = '', page = 1) {
    console.log(query);
    this.setState({ query });
    this.setState({ page: 1 });
    if (url !== this.state.url) this.setState({ url });
    const fullUrl = `${url}&page=${page}`;
    console.log(fullUrl);
    this.loadContent(fullUrl);
  }

  loadContent(url) {
    this.setState({ loading: true });
    this.setState({ nothingFound: false });
    console.log(url);
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': '24121afa0914eaddbfa752b63590b6021628bc7c3bbc374a4116963ccadefcdf',
      },
    })
      .then((response) => {
        console.log(response.headers.get('X-Pagination-Page-Count'));
        this.setState({ maxPage: response.headers.get('X-Pagination-Page-Count') });
        return response.json().then((arr) => { // загрузка контента
          if (arr.length === 0) { // если ничего не найдено
            this.setState({ loading: false });
            this.setState({ nothingFound: true });
          }
          let newArrContent = [];
          this.state.chooseShow ? (arr.map((item) => {
            newArrContent.push(item.show);
          }))
            : (newArrContent = [...arr]);
          console.log(newArrContent);
          this.setState({ content: newArrContent });
          return newArrContent;
        });
      })
      .then((data) => { // загрузка картинок
        const prevContent = [...this.state.content];
        data.map((item, index) => {
          fetch(`https://webservice.fanart.tv/v3/tv/${item.ids.tvdb}?api_key=408b22edfb0465364b031d789388adb3`)
            .then((image) => {
              image.json().then((imageUrl) => {
                const newItem = Object.assign({}, item);
                if (imageUrl.tvposter) { // Перебор большинства возможных значений нахождения Url картинки в JSON объекте
                  newItem.url = imageUrl.tvposter[0].url;
                } else if (imageUrl.clearlogo) {
                  newItem.url = imageUrl.clearlogo[0].url;
                } else if (imageUrl.hdtvlogo) {
                  newItem.url = imageUrl.hdtvlogo[0].url;
                } else if (imageUrl.status === 'error') {
                  newItem.url = 'https://vignette.wikia.nocookie.net/citrus/images/6/60/No_Image_Available.png/revision/latest?cb=20170129011325';
                } else {
                  newItem.url = 'https://cs.pikabu.ru/post_img/big/2013/11/22/5/1385100645_1399473065.jpg';
                }
                prevContent.splice(index, 1, newItem);
                this.setState({ content: prevContent });
                if (this.state.loading) this.setState({ loading: false });
              });
            });
        });
      });
  }

  componentDidMount() {
    this.urlMaker('https://api.trakt.tv/shows/popular?extended=full&limit=10&genres=action');
  }

  render() {
    const {
      content, page, loading, category, query, maxPage, nothingFound, chooseShow,
    } = this.state;
    return (
      <div className={styles.app}>
        <SearchField
          title={category}
          search={(url, query) => { this.urlMaker(url, query); this.setState({ category: query }); this.setState({ chooseShow: true }); }}
          changeInput={text => this.setState({ query: text.target.value })}
          query={query}
        />
        <Categories onClick={(url, category, chooseShow = false) => { this.urlMaker(url); this.setState({ category }); this.setState({ chooseShow }); }} />
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
                    onClick={() => this.sortFun('year')}
                  >Year
                  </th>
                  <th
                    className={styles.sort}
                    onClick={() => this.sortFun('rating')}
                  >Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.map((item, index) => 
                  <ListRow key={item.ids.tvdb} 
                           title={item.title} 
                           year={item.year} 
                           id={item.url} 
                           number={index}
                           rating={item.rating}
                           page={page}
                           overview={item.overview}/>
                )}
              </tbody>
            </table>
  <ButtonNavigation curPage={page} maxPage={maxPage} onChange={page => this.changePage(page)} />
</div>
}
      </div>
    );
  }
}

export default App;


/*
          КАК ИЗБАВИТЬСЯ ОТ [object Object] что бы посмотреть содержимое ????????
          как получить из одного this доступ к другому this (например в функции xmlHttpRequest один зис а мне надо сетстэйт вызвать)
          как лучше сделать, когда нужно параллельно получить от разных серверов данные для перерисовки одной и той же части контента (когда использовать сет стэйт)
*/
