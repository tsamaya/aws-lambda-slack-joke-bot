import * as bot from '../src/functions/bot/bot';
import * as serverless from '../serverless';

describe('environment', () => {
  test('serverless', () => {
    expect(serverless).toBeDefined();
    expect(typeof serverless).toEqual('object');
  });
  test('bot handler', () => {
    expect(bot).toBeDefined();
    expect(bot.handler).toBeDefined();
    expect(typeof bot.handler).toEqual('function');
  });
});
