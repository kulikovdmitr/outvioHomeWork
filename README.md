# How to run the test application

1. `yarn install` the dependencies.
2. `yarn start` to start the front-end.
3. `yarn run start-server` to start the back-end.

# Task directions

- Complete at least 4 types of tests below (unit, integration, component and E2E tests).
- The goal is augment the project with tests to ensure correct operation in the future.
- You can use any tool to achieve this. `Cypress` is a preferred framework for testing, but you can use a framework of your choosing as well (it does not affect scoring).
- You can change the source code to accommodate it for tests, as long as you are not breaking functionality.

# Ideas for tests

You can rely on your own experience as to what types of tests are added, but here are a couple ideas to get started:

- Unit tests
- Integration tests
- Component tests (preferable with Jest. For better understanding https://medium.com/opendoor-labs/testing-react-components-with-jest-a7e8e4d312d8)
- E2E tests
- Test coverage instrumentation
- Visual regression tests
- Type safety

# Deliverables

- You need to return all project files with the added tests.
- In case you find a bug(s) feel free to create a report.

# What I've done

- set css-attributes in frontend for tests (example: marker="add-pizza-btn")
- created page objects for e2e-tests
- created e2e-ui tests both checking the display of elements and the execution of cases
- implemented the ability to run tests from the console specifying the test host  (a preparatory step for running on CI)
- wrote the first unit test for the handler (appFetch.test.js) - the test is launched via the play button in IDE

# What didn't get done

- did not decide how best to automatically raise the environment before running tests locally, there is an idea to run it with a script, but there are disadvantages, you need to study the documentation
- deploying test frontend and backend in docker and running tests in a container
- did not provide output of test coverage and testing reports
- did not write integration, acceptance, visual regresssion tests && type safety


# Run tests 

Run with test-host (e2e-tests) & api-host (api-tests) `cypress run --env host=http://localhost:3000 api-host=http://localhost:3001`

