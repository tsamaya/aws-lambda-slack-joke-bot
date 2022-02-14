import type { APIGatewayProxyResult } from 'aws-lambda';

export const formatJSONResponse = (
  response: Record<string, unknown>
): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
