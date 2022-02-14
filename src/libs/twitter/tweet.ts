// My Dad's joke from @icanhazdadjoke:
// 🙃 #dadjokes #badjokes
type Tweet = {
  text: string;
};
export const buildTweet = (joke: string): Tweet => {
  const tweet = {
    text: `My Dad's joke from @icanhazdadjoke: ${joke} 🙃 #dadjokes #badjokes #jokes #puns`,
  };
  return tweet;
};

export const sendTweet = (tweet: Tweet) => {
  console.log(tweet);
};
