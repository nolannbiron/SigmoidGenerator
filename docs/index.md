# Sigmoid Generator

Sigmoid generator is a test project built with lerna and yarn workspaces. It is a simple tool that generates a sigmoid function with a given start, end, mean and deviation.

A live demo is available <a href="https://sigmoid.nolannbiron.com" target="_blank">here</a>
<br/>
A live storybook is available <a href="https://sigmoidgenerator-storybook.vercel.app" target="_blank">here</a>

## Table of Contents

-   [Getting Started](#getting-started)
-   [Main dependencies](#main-dependencies)
-   [Project structure](#project-structure)
-   [Being Pragmatic](#being-pragmatic)
-   [Running the project](#running-the-project)
-   [Running the tests](#running-the-tests)
-   [Running Storybook](#running-storybook)

## Main dependencies

-   React
-   Vite with SWC
-   Typescript
-   Lerna
-   Yarn Workspaces
-   TailwindCSS & DaisyUI
-   Jest
-   React Testing Library
-   Storybook
-   react-i18next
-   recharts

<hr/>

## Project structure

-   **packages**: contains all the packages of the project
    -   **theme**: contains the theme and UIKit of the project
    -   **app**: contains the main app of the project

## Being Pragmatic

This project is a test project. It is not meant to be used in production. That's why I chose to build it with Vite and SWC instead of CRA or NextJS (No SSR or SEO neededed).

Lerna and Yarn Workspaces are used to manage the project. It is a good way to manage a monorepo and to share dependencies between packages.

Everything is built with Typescript, tested with Jest and React Testing Library and documented with Storybook.

<hr />

## Running the project

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:

```bash
git clone https://github.com/nolannbiron/SigmoidGenerator.git
```

2. Install dependencies:

```bash
yarn install
```

3. Build the project:

```bash
yarn build
```

4. Run the project:

```bash
yarn start
```

<hr/>

## Running the tests

To run the tests, run the following command:

```bash
yarn test
```

<hr/>

## Running Storybook

To run Storybook, run the following command:

```bash
yarn storybook
```
