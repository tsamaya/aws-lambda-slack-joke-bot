import type { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { getDadJoke } from '@libs/jokes/fetch-joke';
import { Joke } from '@libs/jokes/joke';
import { buildTweet, sendTweet } from '@libs/twitter/tweet';

const bot: APIGatewayProxyHandler = async () => {
  try {
    const dadJoke: Joke = await getDadJoke();
    const tweet = buildTweet(dadJoke.joke);
    await sendTweet(tweet);
    return formatJSONResponse({
      message: 'Hey mate, check your feed!',
    });
  } catch (error) {
    console.log(error);
    return formatJSONResponse({
      message: `No joke for tonight, sorry mate!`,
    });
  }
};

export const main = bot;
