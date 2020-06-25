import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  console.log(confirmed)
  if (!confirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" className={styles.title} gutterBottom>Confirmed Cases Over Time Daily</Typography>
            <Typography variant="h4" className={styles.count} gutterBottom>
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" className={styles.dates}>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" className={styles.title} gutterBottom>Recovered</Typography>
            <Typography variant="h4" className={styles.count} gutterBottom>
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" className={styles.dates}>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" className={styles.title} gutterBottom>Deaths Over Time</Typography>
            <Typography variant="h4" className={styles.count} gutterBottom>
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" className={styles.dates}>{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards; 