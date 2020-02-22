import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import style from './Item.css';

const Item = ({ item, activeCard, setActiveCard }) => {
  // const classes = useStyles();
  const addressLine1 = item.address.address2 ? `${item.address.address1} ${item.address.address2}` : `${item.address.address1}`;
  const addressLine2 = `${item.address.city}, ${item.address.state} ${item.address.zip}`;
  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          className={style.card_media}
          image={item.mainImageUrl}
          title='image'
          src='picture'
        />
        <CardContent>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item;