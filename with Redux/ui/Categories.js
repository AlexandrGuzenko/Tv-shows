/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import styles from '../css/categories.css';
import { 
  urlMaker
} from '../redux/actionCreators/actionCreators.js';

const Categories = ({ onClick = f => f }) => (
  <div className={styles.categories}>
    <div className={styles.title}>
      <h3>
Categoties
      </h3>
    </div>
    <div className={styles.main}>
      <div className={styles.column}>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=action', 'Action')}>
Action
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=adventure', 'Adventure')}>
Adventure
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=animation', 'Animation')}>
Animation
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=anime', 'Anime')}>
Anime
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=crime', 'Crime')}>
Crime
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=fantasy', 'Fantasy')}>
Fantasy
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=science-fiction', 'Science Fiction')}>
Science Fiction
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&genres=superhero', 'Superhero')}>
Superhero
        </a>
      </div>
      <div className={styles.column}>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full', 'Popular')}>
Popular
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/trending?extended=full', 'Trending')}>
Trending
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/anticipated?extended=full', 'Most unticipated')}>
Most unticipated
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&years=2014', '2014 year')}>
2014
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&years=2015', '2015 year')}>
2015
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&years=2016', '2016 year')}>
2016
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&years=2017', '2017 year')}>
2017
        </a>
        <a className={styles.category} onClick={() => onClick('https://api.trakt.tv/shows/popular?extended=full&years=2018', '2018 year')}>
2018
        </a>
      </div>
    </div>
  </div>
);

function mapDispatchToProps (dispatch) {
  return ({
    onClick: (url, category) => {
      dispatch(urlMaker(url, category))
    }
    
  })
}

export default connect(
  null,
  mapDispatchToProps
)(Categories);


/*
return(
		<div className={styles.categories}>
			<div className={styles.title}>
				<h3>Categoties</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.column}>
					<a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=action', 'Action')}>Action</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=adventure', 'Adventure')}>Adventure</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=animation', 'Animation')}>Animation</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=anime', 'Anime')}>Anime</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=crime', 'Crime')}>Crime</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=fantasy', 'Fantasy')}>Fantasy</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=science-fiction', 'Science Fiction')}>Science Fiction</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&genres=superhero', 'Superhero')}>Superhero</a>
				</div>
				<div className={styles.column}>
					<a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full', 'Popular')}>Popular</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/trending?extended=full', 'Trending', 'Trending')}>Trending</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/anticipated?extended=full', 'Most unticipated', 'Most unticipated')}>Most unticipated</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&years=2014', '2014 year')}>2014</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&years=2015', '2015 year')}>2015</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&years=2016', '2016 year')}>2016</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&years=2017', '2017 year')}>2017</a>
				    <a className={styles.category} onClick={()=>onClick('https://api.trakt.tv/shows/popular?extended=full&years=2018', '2018 year')}>2018</a>
				</div>
			</div>
		</div>
			)
			*/
