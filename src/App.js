import React from 'react';
import {Container, Grid} from '@material-ui/core';

import { Cards, Chart, CountryPicker, Header} from './components';
import styles from './App.module.css';

import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country });
  }

  render (){
    const { data, country } = this.state
    return (
      <React.Fragment>
        <Header />
        <main>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Cards data={data} />
              </Grid>
              <Grid item xs={12} md={9}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
