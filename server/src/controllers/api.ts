import axios from 'axios';

const weatherApi = axios.create({
  baseURL: `${process.env.WEATHER_HOST}`
})

const currencyApi = axios.create({
  baseURL: `${process.env.CURRENCY_HOST=}`
})

module.exports = {
  weatherApi, currencyApi
};