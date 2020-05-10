import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Calendar from 'react-calendar';
import { render } from "react-dom";
import 'react-calendar/dist/Calendar.css';


     
const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    content: {
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: theme.palette.error.main,
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    },
    difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    differenceIcon: {
        color: theme.palette.error.dark
    },
    differenceValue: {
        color: theme.palette.error.dark,
        marginRight: theme.spacing(1)
    }
}));



const Budget = props => {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
      };

    const classes = useStyles();
      let dia,mes,año;
    return (
         <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {dia = date.getDate()}
      {console.log(dia,date.getMonth(),date.getFullYear())}
    
      {date.toString()}
    </div>
      );
};





Budget.propTypes = {
    className: PropTypes.string
};

export default Budget;
