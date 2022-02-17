import * as handler from '../src/functions/bot/handler';

describe('handlers', () => {
  test('bot handler', () => {
    expect(handler).toBeDefined();
    expect(handler.main).toBeDefined();
    expect(typeof handler.main).toEqual('function');
  });
});
