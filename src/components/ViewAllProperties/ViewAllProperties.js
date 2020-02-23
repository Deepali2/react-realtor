import React, { useState } from 'react';
import PropTypes from "prop-types";
import style from './ViewAllProperties.css';

import Item from '../Item/Item';
import SwitchToggle from '../SwitchToggle/SwitchToggle'

//Material UI imports
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tableContainer: {
    fontFamily: 'Montserrat'
  }
}

const ViewAllProperties = ({ data, setActiveCard, classes }) => {
  const [listView, setListView] = useState(false);

  return (
    <>
      <div className={style.slide_toggle}>
        <SwitchToggle listView={listView} setListView={setListView}/>
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
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Rent</TableCell>
                <TableCell>Gross Yield</TableCell>
                <TableCell>Year Built</TableCell>
                <TableCell></TableCell>
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
                : (<>
                  <TableRow>
                    <TableCell><CircularProgress /></TableCell>
                  </TableRow>
                </>)
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
  setActiveCard: PropTypes.func,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ViewAllProperties);
