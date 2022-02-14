import fetch from 'isomorphic-unfetch';
import { Joke } from './joke';

const options = {
  headers: {
    Accept: 'application/json',
    'User-Agent':
      'My Library (https://github.com/tsamaya/aws-lambda-twitter-joke-bot)',
  },
};

/**
 * returns a Dad's Bad Joke from the API configured as env var JOKES_API_URL
 *
 * @returns a Joke
 */
export const getDadJoke = async (): Promise<Joke> => {
  const response = await fetch(process.env.JOKES_API_URL, options);
  const json = await response.json();
  return json;
};
