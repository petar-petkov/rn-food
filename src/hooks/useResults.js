import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  // good names would be businesses setBusinesses the naming in the API
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      // In case we're retrying we want to remove the error
      setError('');
    } catch (err) {
      setError('Something went wrong')
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, [])

  return [searchApi, results, error];
};