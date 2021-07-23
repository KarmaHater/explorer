export const BASE_URL = "https://api.github.com/graphql";

const { REACT_APP_GITHUB_API_TOKEN } = process.env;

export const githubApi = (body) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${REACT_APP_GITHUB_API_TOKEN}`,
    },
    ...body,
  }).then((res) => res.json());
