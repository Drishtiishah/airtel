import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ControlledAccordions from '../Components/Accordion';
import SimpleCard from '../Components/card1';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function PaymentOption() {
    const classes = useStyles();
    return (
        <React.Fragment>

<SimpleCard/>
<Typography variant="h5" component="h2">
          Payment Method
        </Typography>
<ControlledAccordions/>
<Typography className={classes.pos} color="textSecondary">
          Don't worry your money is safe
        </Typography>
<Typography className={classes.pos} color="textSecondary">
          100% secured Payments
        </Typography>
</React.Fragment>
    )
    
}