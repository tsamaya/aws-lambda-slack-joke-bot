import type { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '../../libs/api-gateway';
import { getDadJoke } from '../../libs/jokes/fetch-joke';
import { Joke } from '../../libs/jokes/types';
import {
  SlackMessage,
  buildSlackMessage,
  postSlackMessage,
} from '../../libs/slack';

export const handler: APIGatewayProxyHandler = async () => {
  console.log('-- the bot is starting');
  try {
    const dadJoke: Joke = await getDadJoke();
    const message: SlackMessage = buildSlackMessage(dadJoke.joke);
    await postSlackMessage(message);
    return formatJSONResponse({
      message: 'Hey mate, check your feed!',
    });
  } catch (error) {
    console.log(error);
    return formatJSONResponse({
      message: `No joke for tonight, sorry mate!`,
    });
  } finally {
    console.log('-- the bot has finished');
  }
};
