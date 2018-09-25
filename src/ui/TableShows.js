/* eslint-disable */
import React from 'react';

import { 
PostNumber,
PosterShow, 
DescriptionShow, 
YearShow, 
RatingShow
} from './TableElements';
import TableRow from './TableRow'
import styles from '../css/App.css';

const TableShows = ({ content, page, sortFun }) => {
	return (
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
          <th className={styles.sort} onClick={() => sortFun('year')}>
            Year
          </th>
          <th className={styles.sort} onClick={() => sortFun('rating')}>
            Rating
          </th>
        </tr>
      </thead>
      <tbody>
        {content && content.map((item, index) =>{
          return(
          <TableRow key={item.ids.tvdb}>
            <PostNumber page={page} number={index} />
            <PosterShow id={item.url} />
            <DescriptionShow title={item.title} overview={item.overview} />
            <YearShow year={item.year} />
            <RatingShow rating={item.rating} />
          </TableRow>
          )
        } 
        )}
      </tbody>
    </table>
	)
}

export default TableShows;