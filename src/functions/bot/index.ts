import { handlerPath } from '@libs/handler-resolver';

console.log(handlerPath(__dirname) + '/handler.main');

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'joke',
      },
    },
    {
      // https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
      schedule: 'cron(30 16 ? * MON-FRI *)',
    },
  ],
};
