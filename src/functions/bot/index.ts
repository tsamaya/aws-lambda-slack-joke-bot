import { handlerPath } from '../../libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/bot.handler`,
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
