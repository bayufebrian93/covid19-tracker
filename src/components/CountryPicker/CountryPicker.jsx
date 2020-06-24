import React, { useEffect, useState } from 'react';
import { Select, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setfetchedCountries])

  return (
    <FormControl className={styles.formControl}>
        <Select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="global">Global</option>
          {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </Select>
    </FormControl>
  )
}

export default CountryPicker;