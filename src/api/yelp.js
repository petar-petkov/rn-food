import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 5k2lQdArKE53ltTAxeAuj5AHDxudL5ui7enQPyhtLTLt9byQbUDfivrdFF0A5bN9wuGaGUCvQs4pSnQs2T1twn21tYDR2jJL4ReKirVptPlcwg0kavvPyWscX5u2X3Yx'
  }
});

