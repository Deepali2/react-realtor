import React, { useState } from 'react';
import PropTypes from "prop-types";
import style from './ViewAllProperties.css';

import Item from '../Item/Item';
import SlideToggle from '../SlideToggle/SlideToggle'

import { CircularProgress, Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';

const ViewAllProperties = ({ data, setActiveCard }) => {
  const [listView, setListView] = useState(true);

  return (
    <>
      <div className={style.slide_toggle}>
        <SlideToggle />
      </div>
      {!listView && (
        <ul className={style.items}>
          {data
            ? data.map(item => (
              <Item
                item={item}
                key={item.id}
                setActiveCard={setActiveCard}
                listView={listView}
              />
            ))
            : <CircularProgress />
          }
        </ul>
      )}

      {listView && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Rent</TableCell>
                <TableCell>Gross Yield</TableCell>
                <TableCell>Year Built</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ? data.map(item => (
                  <Item
                    item={item}
                    key={item.id}
                    setActiveCard={setActiveCard}
                    listView={listView}
                  />
                ))
                : <CircularProgress />
              }
            </TableBody>
          </Table>
        </TableContainer>
      )}

    </>
  )
}

ViewAllProperties.propTypes = {
  data: PropTypes.array,
  setActiveCard: PropTypes.func
}

export default ViewAllProperties;
