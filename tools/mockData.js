const items = [
  {
    id: 1,
    name: "Securing React",
    description: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    userId: 3
  },
  {
    id: 2,
    name: "React",
    description: "React: The Big Picture",
    slug: "react-big-picture",
    userId: 1
  },
  {
    id: 3,
    name: "Reusable React",
    description: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    userId: 2
  },
  {
    id: 4,
    name: "JavaScript",
    description: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    userId: 3
  },
  {
    id: 5,
    name: "React Redux",
    description: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    userId: 1
  },
  {
    id: 6,
    name: "Building Apps",
    description: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    userId: 2
  },
  {
    id: 7,
    name: "Clean Code",
    description: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    userId: 3
  },
  {
    id: 8,
    name: "Arch. Apps",
    description: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    userId: 1
  },
  {
    id: 9,
    name: "Outliers",
    description: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    userId: 2
  },
  {
    id: 10,
    name: "Components",
    description: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    userId: 3
  }
];

const users = [
  { id: 1, name: "Paul" },
  { id: 2, name: "Kate" },
  { id: 3, name: "Ryan" }
];

const newItem = {
  id: null,
  name: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newItem,
  items,
  users
};
