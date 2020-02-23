import React, { useState } from 'react';
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 40,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 13,
    height: 13,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function SwitchToggle({ listView, setListView }) {
  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Card</Grid>
        <Grid item>
          <AntSwitch
            checked={listView}
            onChange={() => setListView(!listView)}
            value="listView"
          />
        </Grid>
        <Grid item>List</Grid>
      </Grid>
    </Typography>
  );
}

SwitchToggle.propTypes = {
  listView: PropTypes.bool,
  setListView: PropTypes.func
}