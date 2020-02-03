import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Bangers, cursive',
  },
});

const Title = props => {
  const classes = useStyles();

  return <Typography classes={{ root: classes.root }} {...props} />;
};

export default Title;
