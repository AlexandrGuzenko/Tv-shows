/* eslint-disable */
import React from 'react';
import {
  PanelGroup,
  Panel,
} from 'react-bootstrap';
import styles from '../css/App.css';

const ListRow = ({
  number, title, year, id, rating, page, overview,
}) => (
  <tr>
    <td>
      {(page - 1) * 10 + number + 1}
    </td>
    <td>
      <img src={id} alt="something wrong..." />
      {' '}
    </td>
    <td>

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
    </td>
    <td>
      {year}
    </td>
    <td>
      {Math.round(rating * 100) / 100}
    </td>
  </tr>
);

export default ListRow;
