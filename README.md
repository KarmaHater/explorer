# Task

1. Your task is to build a React web application that displays all the "topics" related to the term "react" using the GitHub GraphQL API.
2. The application should display how many "stargazers" each topic has.
3. A click on a topic should display the topics related to that topic and how many stargazers they have. And so forth.
4. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI.

### Intro

Hi, My name is Andra. I just wanted to thank you personally for reviewing my code. I love feedback, good or bad; I want to hear it. Please, if you don't mind sharing your thought with me after, it would be much appreciated.

---

### Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was only made for development and not hosted anywhere.

You need to create a .env file and add `REACT_APP_GITHUB_API_TOKEN` for the project to work.

---

### Product Decisions

**Project Structure :)**

1. **ui_lib:** I created this folder to hold basic components that are highly flexible. These are the types of components I would expect to be in your internal UI library with company-specific styles.
2. **components:** I create this folder to hold components that have unique responsibilities. Therefore not shareable or flexible. e.g. Topics.
3. **redux:** Holds my store and slices, which control state management.
4. **API:** Wrapper around the Github API
5. **Fetchers:** Fetch different parts of the API
6. **gql:** Different GQL queries

**Tech Stack :)**
I wanted to keep this project simple. I believe you should not add any tech lib without having a good reason. This is why you will not find that many external libs in this project.

1. **React:** Flexible, easy way to build complex UIs. I love it!
2. **Redux:** This project is straightforward and, in my opinion, does not need Redux or any complex state management lib. I could have accomplished the same thing with Context/ Provider. My only reasoning for adding it was because the recruiter said you use it in-house. I wanted to learn something new, which is why I choose to use [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start). I found myself liking it a lot. First, it cuts down on annoying boilerplate, takes care of async actions, and sets up immutability for you. I'm going to star this project on Github :)

---

### What I would have done if I had more time

As you know, we only have some much time in a day. I left the following topics out, but I think they are essential and would have made the project stronger. I would have done these, but I have a few more coding challenges to get through this week. I stopped here because I think it is a good example of what I can offer to your company :) Hope to speak with you soon.

1. **Testing:** I would have added tests. I would have tested everything in the UI-lib and Redux. I might not have tested anything in the components folders because UIs are constantly changing. Ultimately, this is a team/business decision if those components get tested or not.
2. **Css:** I'm a big fan of CSS in JS. I like writing in the same language, and I love creating logic in CSS objects. In the end, I would have used Emotion.
3. **Error State** I would have added error states if the API failed to inform the user to refresh or come back later.
4. **Loading State** I would have added loading states when the app is fetching data. Right now, I have a pretty bad flicker; adding this state would have solved this problem.
5. **Performance:** I added a check before we hit the Github API. If we have the information in the store, we return it. Otherwise, we get the data from the API. Performance is a never-ending conversation, and I would have loved to go into this topic a little deeper if I had time.
