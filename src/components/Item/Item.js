import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

//Material UI imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import style from './Item.css';


const price = num => {
  if (!num) return;
  const truncatedArr = num.toString().split('.');

  const array = truncatedArr[0].split('');
  const decimal2Places = truncatedArr[1] ? (truncatedArr[1] / Math.pow(10, truncatedArr[1].length)).toFixed(2) * 100 : '00';

  let index = -3;

  while (array.length + index > 0) {
    array.splice(index, 0, ',');
    index -= 4;
  }
  const number = `$${array.join('')}.${decimal2Places}`;
  return number;
}

const styles = {
  seeDetails: {
    background: '#5c2be2',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    textDecoration: 'none',
    textTransform: 'none'
  },
  address1: {
    color: '#5c2be2',
    fontSize: '1.1rem',
    fontWeight: '300'
  },
  address2: {
    color: 'gray',
    fontSize: '0.8rem',
    fontWeight: '300'
  }
};

const Item = ({ item, setActiveCard, listView, classes }) => {
  const addressLine1 = item.address.address2 ? `${item.address.address1} ${item.address.address2}` : `${item.address.address1}`;
  const addressLine2 = `${item.address.city}, ${item.address.state} ${item.address.zip}`;
  const listPrice = item.financial ? `${item.financial.listPrice}` : null;
  const yearBuilt = item.physical ? `Built in ${item.physical.yearBuilt}` : null;
  const listYearBuilt = item.physical ? `${item.physical.yearBuilt}` : null;
  const monthlyRent = item.financial ? `${item.financial.monthlyRent}` : null;
  const grossyield = item.financial ? `${((monthlyRent * 12 / listPrice) * 100).toFixed(2)}%` : null;

  return (
    <>
      {!listView && (
        <Card className={style.card} onClick={() => setActiveCard(item)}>
          <CardActionArea>
            <Link to='/property-details'>
              <CardMedia
                className={style.card_media}
                image={item.mainImageUrl}
                title='image'
                path='/property-details'
                src='picture'
              />
              <div className={style.overlay}>
                <p className={style.list_price}>{price(listPrice)}</p>
                <p className={style.built_in}>{yearBuilt}</p>
              </div>
              <CardContent className={style.card_content}>
                <table className={style.items}>
                  <tbody>
                    <tr>
                      <td className={style.monthlyRent}><span>Rent</span></td>
                      <td className={style.grossyield}><span>Gross Yield</span></td>
                    </tr>
                    <tr>
                      <td className={style.monthlyRent}><span>{price(monthlyRent)}</span></td>
                      <td className={style.grossyield}><span>{grossyield}</span></td>
                    </tr>
                  </tbody>
                </table>
                <Divider />
                <p className={style.address1}>{addressLine1}</p>
                <p>{addressLine2}</p>
              </CardContent>
            </Link>

          </CardActionArea>
        </Card>
      )}

      {listView && (
        <TableRow>
          <TableCell>
            <Link to='/property-details' onClick={() => setActiveCard(item)}>
              <Avatar alt="avatar" src={item.mainImageUrl} />
            </Link>
          </TableCell>
          <TableCell>
            <Link to='/property-details' onClick={() => setActiveCard(item)} style={{ textDecoration: 'none' }}>
              <p className={classes.address1}>{addressLine1}</p>
              <p className={classes.address2}>{addressLine2}</p>
            </Link>
          </TableCell>
          <TableCell>{price(listPrice)}</TableCell>
          <TableCell>{price(monthlyRent)}</TableCell>
          <TableCell>{grossyield}</TableCell>
          <TableCell>{listYearBuilt}</TableCell>
          <TableCell>
            <Link to='/property-details' onClick={() => setActiveCard(item)} style={{ textDecoration: 'none' }}>
              <Button variant="contained" className={classes.seeDetails}>See Details</Button>
            </Link>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  setActiveCard: PropTypes.func,
  listView: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item);
// export default Item;