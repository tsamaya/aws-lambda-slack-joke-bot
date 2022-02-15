import axios from 'axios';

export type SlackMessage = {
  channel: string;
  username: string;
  text: string;
};
export const buildSlackMessage = (joke: string): SlackMessage => {
  const message = {
    channel: `#${process.env.SLACK_WEBHOOK_CHANNEL}`,
    username: process.env.SLACK_WEBHOOK_USERNAME,
    text: `My Dad's joke: ${joke} 🙃`,
    icon_emoji: ':smile:',
  };
  return message;
};

export const postSlackMessage = async (message: SlackMessage) => {
  console.log(message);
  return axios.post(process.env.SLACK_WEBHOOK_URL, message);
};
