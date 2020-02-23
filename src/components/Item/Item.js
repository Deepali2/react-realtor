import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Divider, Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';

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

const Item = ({ item, setActiveCard, listView }) => {
  const addressLine1 = item.address.address2 ? `${item.address.address1} ${item.address.address2}` : `${item.address.address1}`;
  const addressLine2 = `${item.address.city}, ${item.address.state} ${item.address.zip}`;
  const listPrice = item.financial ? `${item.financial.listPrice}` : null;
  const yearBuilt = item.physical ? `Built in ${item.physical.yearBuilt}` : null;
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
            </Link>
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
          </CardActionArea>
        </Card>
      )}

      {listView && (
        <TableRow>
          <TableCell>I am a row</TableCell>
          <TableCell>I am a row</TableCell>
          <TableCell>I am a row</TableCell>
          <TableCell>I am a row</TableCell>
          <TableCell>I am a row</TableCell>
          <TableCell>I am a row</TableCell>
        </TableRow>
      )}
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  setActiveCard: PropTypes.func,
  listView: PropTypes.bool
}

export default Item;