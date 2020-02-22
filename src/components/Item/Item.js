import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Divider } from '@material-ui/core';
import style from './Item.css';

const Item = ({ item, activeCard, setActiveCard }) => {
  const addressLine1 = item.address.address2 ? `${item.address.address1} ${item.address.address2}` : `${item.address.address1}`;
  const addressLine2 = `${item.address.city}, ${item.address.state} ${item.address.zip}`;
  const listPrice = item.financial ? `${item.financial.listPrice}` : null;
  const yearBuilt = item.physical ? `Built in ${item.physical.yearBuilt}` : null;
  const monthlyRent = item.financial ? `${item.financial.monthlyRent}` : null;
  const grossyield = item.financial ? `${((monthlyRent * 12 / listPrice) * 100).toFixed(2)}%` : null;

  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          className={style.card_media}
          image={item.mainImageUrl}
          title='image'
          src='picture'
        />
        <div className={style.overlay}>
          <p className={style.list_price}>{price(listPrice)}</p>
          <p className={style.built_in}>{yearBuilt}</p>
        </div>
        <CardContent className={style.card_content}>
          <div className={style.gridItems}>
            <div>Monthly Rent Gross Yield</div>
            <div>{price(monthlyRent)} {grossyield}</div>
          </div>
          <Divider />
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function price(num) {
  if (!num) return;
  const truncatedArr = num.toString().split('.');

  const array = truncatedArr[0].split('');
  const decimal2Places = truncatedArr[1] ? (truncatedArr[1] / Math.pow(10, truncatedArr[1].length)).toFixed(2) * 100 : '00';

  let index = -3;

  while (array.length + index > 0) {
    array.splice(index, 0, ',');
    // Decrement by 4 since we just added another unit to the array.
    index -= 4;
  }
  const number = `$${array.join('')}.${decimal2Places}`;
  return number;
}

export default Item;