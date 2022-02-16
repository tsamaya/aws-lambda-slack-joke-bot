import { buildSlackMessage } from './slack';

describe('slack', () => {
  test('buildSlackMessage set hello in text', (): void => {
    const message = 'hello';
    const actual = buildSlackMessage(message);
    // console.log(actual);
    expect(actual).toBeDefined();
    expect(actual.text).toBeDefined();
    expect(actual.text).toMatch(/.*hello.*/);
  });
});
