## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Workflow for developing custom solution](#workflow-for-developing-custom-solution)
- [About the `utils` package](#about-the-utils-package)
- [Set up your local development environment](#set-up-your-local-development-environment)
- [What does the precommit hook do](#what-does-the-precommit-hook-do)
- [Code review](#code-review)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Workflow for developing custom solution

The Bappo coding tool is not powerful enough at the moment to provide the best developer experience when multiple people work on the same project. That's why we use local development environment and Github to help with code quality assurance, version management and team collaboration.

The following workflow is a recommendation. You are welcome to give us your ideas about how to improve it and it will very likely change as the Bappo coding tool evolves.

1. Clone this repo to your computer ([see how to set up your local development environment](#set-up-your-local-development-environment)). Then rename the folder to your project name and publish it to Github.

1. Reinitialize git by running the following commands.
```sh
rm -rf .git
git init
```

1. Push the repository to github or you can do it later.

1. Run `yarn` in the root folder to install dependencies.

1. Whenever you add a new package in Bappo, create a folder with the same name under `/packages`.

1. If you want to install dependencies, run `yarn add dependency-name` in the root folder. If you write TypeScript, you might also want to install the type definition for the dependency `yarn add --dev @types/dependency-name`. Note that some npm packages provide type definitions themselves so you don't need to do this.

1. It's up to your personal preference to decide whether you'd like to code in the Bappo coding tool or in your code editor, but make sure all the folders and files are in sync. Once you are finished with making changes, do a git commit on your computer. It should first run through some automated checks ([more about the precommit hook](#what-does-the-precommit-hook-do)). So if your commit goes in instantly, something is wrong ([troubleshooting](#troubleshooting)).

1. Now that you have committed your code, you can either push it into the remote master branch or create a pull request depending on if you want your code to be reviewed by your team ([more on code review process](#code-review)).

## About the `utils` package

The `utils` package under `/packages` is not something special. It's just a normal Bappo code package. The reason we put it in the template is that we found it quite common for packages to import [lodash](https://lodash.com/) and [moment](https://momentjs.com/). By putting common dependencies in a separate package, we can reduce the amount of code that needs to be downloaded when an end user opens a custom coded page. You can make changes to it however you like or delete it if you don't need it.

## Set up your local development environment

1. Make sure you have git installed. You check using the command below. It should print a path if you have git installed.

   ```sh
   which git
   ```

1. Install [Node.js](https://nodejs.org/en/). Check installation using the command below.

   ```sh
   which node
   ```

1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable). Check installation using the command below.

   ```sh
   which yarn
   ```

1. Install [Visual Studio Code](https://code.visualstudio.com/).

1. Open Visual Studio Code and install the following extensions:

- ESLint

  [ESLint](https://eslint.org/) will help you discover mistakes and avoid potential bugs by analysing your code. It will display an error indicator and you can also see the error in the bottom panel.
  ![eslint](https://user-images.githubusercontent.com/10165956/90354159-bc277580-e08b-11ea-848b-0858b5355260.png)

- Pretter - Code formatter

  [Prettier](https://prettier.io/) will automatically format your code to a standard format when you save so you don't need to worry about coding style like identation. This makes sure the coding style is consistent across the team and it makes it easier to read each other's code. It also saves your time trying to make your code pretty.

## What does the precommit hook do

When you make a git commit, a script will run automatically before actually saving your commit. This is what it does:

1. format: This makes sure all the files you have changed will be run through [Prettier](https://prettier.io/) in case your editor did not do it.

1. lint: This makes sure all the files you have changed will be run through [ESLint](https://eslint.org/) in case you've missed them while coding.

1. test: This runs all the relevant test files using [Jest](https://jestjs.io/docs/en/25.x/getting-started). You can add test files by simply using `.test.(js|ts|tsx)` as file extension or create a special folder called `__tests__` and put test files inside.

## Code review

Code review is a very beneficial process to a team as it helps the team discover bugs and design mistakes at an early chance, and it's a perfect place for knowledge sharing.

You can follow the workflow below:

1. Commit your code in a new branch. Make sure the precommit hook runs and there are no errors.

1. Create a PR (pull request) and describe what changes you are making so that the reviewer has some background knowledge.

1. Let your team know about the PR. Someone should review your PR as soon as possible. You might want to use Slack or other tools if you need a deep discussion.

1. You might need to make some changes after some discussion. Once you are done, commit and push to your branch and let the reviewers know.

1. Update from master branch and resolve any conflicts.

1. One of you will merge (preferably Squash and Merge for a cleaner commit history) the PR into the master branch.

1. Delete the branch if not needed anymore.

## Troubleshooting

- Q: My code is not getting formatted when I commit.

  A: Try deleting the `node_modules` folder and run `yarn` in the root folder. You should be able to see the hook script using the command below.

  ```sh
  ls .git/hooks/pre-commit
  ```
