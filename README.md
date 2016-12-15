# Tocco Client
[![Build Status](https://travis-ci.org/tocco/tocco-client.svg?branch=master)](https://travis-ci.org/tocco/tocco-client) [![codecov](https://codecov.io/gh/tocco/tocco-client/branch/master/graph/badge.svg)](https://codecov.io/gh/tocco/tocco-client) [![devDependencies Status](https://david-dm.org/tocco/tocco-client/dev-status.svg)](https://david-dm.org/tocco/tocco-client?type=dev)

This repository contains the web client for the [Tocco Business Framework](https://www.tocco.ch).

This project is based on following technologies, tools and libraries:
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux)
* [redux-saga](https://github.com/yelouafi/redux-saga)
* [npm](https://www.npmjs.com/)
* [webpack](https://webpack.github.io/)
* [Lerna](https://lernajs.io/)

Initial project structure is based on:
https://github.com/davezuko/react-redux-starter-kit.

## Project Structure
This project uses Lerna for package management.
The repository is maintained as [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

Packages are located in folder ``packages/``. Every package maintains its own dependencies
and can be re-used in other packages.

### Package naming
* ``tocco-...`` naming is used in ``package.json``; in folder structure ``tocco-`` prefix can be omitted

Please ensure that every package is prefixed with ``tocco-``

#### Package ``tocco-ui``
Package ``tocco-ui`` is a collection of reusable components. Components can be seen in action in the
[showcase-app deployed on GitHub](https://tocco.github.io/tocco-client/). Content of this page
is re-generated by Travis-CI on any change to packages ``tocco-ui`` or ``tocco-ui-showcase``.

## Documentation
* [Code Styleguide](https://github.com/tocco/tocco-client/blob/master/docs/code-styleguide.md)

Since this project heavily uses Redux and Sagas, you should be aware of it's concepts and also ES6.
A good starting point can be found in these docs:
* http://redux.js.org/
* https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f
* https://davidwalsh.name/es6-generators

## Development

### Prerequisites
Run a Tocco Business Framework application with enabled REST API on:
http://localhost:8080

### Getting started
```
npm install --global lerna@v2.0.0-beta.30
npm run setup
lerna bootstrap
npm start --package={PACKAGE_NAME}
```
Open http://localhost:3000 and start coding!

#### Pro Tip
When working on a package and parallel develop tocco-ui components, the import statement of tocco-ui can temporarily be changed to:
``import * as ToccoUI from '../../../../tocco-ui/src/main'``

This enables hot-reloading and thus a better development experience.

#### Tests
Tests are using following tools and libraries:
* [Karma](https://karma-runner.github.io/)
* [Mocha](https://mochajs.org/)
* [Sinon](http://sinonjs.org/)
* [Chai](http://chaijs.com/)
* [Enzyme](https://github.com/airbnb/enzyme)


All packages:
```
npm test
```

Single Package:
```
npm test --package={PACKAGE_NAME}
```

During development with watch:
```
npm run test:dev --package={PACKAGE_NAME}
```


## Publish bundle
Once the package is ready to publish, run following npm scripts. This registers the bundle
in the npm registry.

```
lerna publish
```

Only build:
```
npm run deploy:dev --package={PACKAGE_NAME}
npm run deploy:prod --package={PACKAGE_NAME}
```

## Linting
Eslint is used for linting. Linting will also be executed automatically on our CI.

```
npm run lint
```

And automatically fix issues:

```
npm run lint:fix
```

## Contribute
### Pull requests
- Create a remote branch that fits the following naming convention: `pr/{package}-{description-of-contribution}`
- Push commits to this branch. Set a commit message as described below.
- Once all changes are pushed, create a pull request. The changes should never break a package and therefore must be self-contained.
- The pull request will be verified by TravisCI and Codecov. If one of them returns a bad result, the problems have to be fixed.
- Optionally assign a reviewer manually.
- Once the pull request is merged, the branch must be deleted.

### Git Commit Msg
Similar to [Karma](http://karma-runner.github.io/0.10/dev/git-commit-msg.html) commit messages follow this convention:

```
<type>(<scope>): <subject>

<body>
```

#### Message subject (first line)
First line must not be longer than 70 characters, second line is always blank and other lines should be wrapped at 80 characters.

**Allowed `<type>` values:**
- feat (new feature)
- fix (bug fix)
- docs (changes to documentation)
- style (formatting etc.; no code change)
- refactor (refactoring production code)
- test (adding missing tests, refactoring tests; no production code change)
- chore (updating grunt tasks etc; no production code change)

**Example `<scope>` values:**
- If the changes affect a single package the scope is set to package name (e.g. login)
- If the change is a global or difficult to assign to a single package the parentheses are omitted.
- If changes affect the monorepo itself, the scope is set to 'tocco-client'

#### Message body
- uses the imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior


## Setup Linting with IntelliJ
- Install ESLint Plugin
- Settings (Preferences on OS X) | Languages & Frameworks | JavaScript |  Code Quality Tools --enable
- Settings (Preferences on OS X) | Editor | Inspections | Code style issues | Unterminated statement -- disable
