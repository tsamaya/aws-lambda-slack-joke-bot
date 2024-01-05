// import * as dotenv from 'dotenv';
// dotenv.config({ path: './.env' });

import 'dotenv/config';

import type { AWS } from '@serverless/typescript';

import bot from './src/functions/bot';

const serverlessConfiguration: AWS = {
  service: 'slack-joke-bot',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      JOKES_API_URL: process.env.JOKES_API_URL, // 'https://icanhazdadjoke.com/',
      SLACK_WEBHOOK_CHANNEL: process.env.SLACK_WEBHOOK_CHANNEL,
      SLACK_WEBHOOK_USERNAME: process.env.SLACK_WEBHOOK_USERNAME,
      SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    },
  },
  // import the function via paths
  functions: { bot },
  package: { individually: true },
  custom: {
    esbuild: {
      packager: 'npm',
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
