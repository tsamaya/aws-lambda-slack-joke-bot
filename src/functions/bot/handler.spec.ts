jest.mock('../../libs/jokes/fetch-joke');
jest.mock('../../libs/slack');
import * as jokes from '../../libs/jokes/fetch-joke';
import * as slack from '../../libs/slack';

import { main } from './handler';
import { Joke } from '../../libs/jokes';

describe('handler', () => {
  test('it passes', async () => {
    const getDadJokeSpy = jest.spyOn(jokes, 'getDadJoke');
    getDadJokeSpy.mockImplementation(async () => {
      const joke: Joke = {
        id: 'xyz123',
        joke: 'a good one',
        status: 200,
      };
      return Promise.resolve(joke);
    });
    const postSlackMessageSpy = jest.spyOn(slack, 'postSlackMessage');

    // mockPostSlackMessage.mockImplementation();

    const response = await main(null, null, null);
    expect(response).toBeDefined();
    expect(getDadJokeSpy).toHaveBeenCalled();
    expect(postSlackMessageSpy).toHaveBeenCalled();
  });
});
