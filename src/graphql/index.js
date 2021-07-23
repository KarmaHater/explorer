export const TopicQuery = `
  query ($topic: String!) {
    topic(name: $topic) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;
