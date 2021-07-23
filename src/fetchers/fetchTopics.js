export const BASE_URL = "https://api.github.com/graphql";
import { githubApi } from "../apis/githubApi";
import { TopicQuery } from "../graphql";

export const fetchTopicsApi = (topic) =>
  githubApi({
    body: JSON.stringify({
      query: TopicQuery,
      variables: {
        topic,
      },
    }),
  });
