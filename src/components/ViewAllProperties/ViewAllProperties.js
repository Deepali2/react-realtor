import React, { useState } from 'react';
import PropTypes from "prop-types";
import style from './ViewAllProperties.css';

import Item from '../Item/Item';
import SlideToggle from '../SlideToggle/SlideToggle'

//Material UI imports
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';

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
                <TableCell></TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Rent</TableCell>
                <TableCell>Gross Yield</TableCell>
                <TableCell>Year Built</TableCell>
                <TableCell>See Details</TableCell>
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
