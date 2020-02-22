import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import style from './Item.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  }
})

const Item = ({ item, activeCard, setActiveCard }) => {
  const classes = useStyles();
  const addressLine1 = item.address.address2 ? `${item.address.address1} ${item.address.address2}` : `${item.address.address1}`;
  const addressLine2 = `${item.address.city}, ${item.address.state} ${item.address.zip}`;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
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