/* eslint-disable */
import React from 'react';
import {
  PanelGroup,
  Panel,
} from 'react-bootstrap';

import styles from '../css/App.css';

export const PosterShow = ({id}) => 
	(<td>
		<img src={id} alt="something wrong..." />
	</td>)

export const DescriptionShow = ({title, overview}) => 
	(<td>
		<PanelGroup accordion id="accordion-example">
	    <Panel eventKey="1">
	      <Panel.Heading>
	        <Panel.Title toggle>
	          <h3>
	            {title}
	          </h3>
	        </Panel.Title>
	      </Panel.Heading>
	      <Panel.Body collapsible>
	        <p className={styles.overview}>
	          {overview}
	        </p>
	      </Panel.Body>
	    </Panel>
	  </PanelGroup>
	</td>)

export const PostNumber = ({page, number}) => (
	<td>
    {(page - 1) * 10 + number + 1}
  </td>
)

export const YearShow = ({year}) => (
	<td>
		{year}
	</td>
)

export const RatingShow = ({rating}) => (
<td>
	{Math.round(rating * 100) / 100}
</td>
)