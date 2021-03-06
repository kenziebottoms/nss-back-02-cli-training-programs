# CLI training programs

![](https://img.shields.io/badge/mvp-wip-yellow.svg)
![](https://img.shields.io/badge/data-sqlite-blue.svg)
![](https://img.shields.io/badge/testing-chai+mocha-a40802.svg)

## Run locally

```bash
git clone git@github.com:kenziebottoms/nss-back-02-cli-training-programs.git
cd nss-back-02-cli-training-programs
npm install
npm run db:gen
npm test
```

## Instructions

Build a command line interface for adding/deleting/viewing a training program to a table in a SQLite db

You will need to construct a single table with these columns:

- [x] seats
- [x] instructor
- [x] start_date
- [x] end_date
- [x] category

The app should enable the following actions:
- [ ] `GET` all/one course
- [x] `DELETE` a course
- [x] `POST` a course

Use test-driven development to build the logic of your app ( Do not test the UI functionality). Remember to practice `red green refactor` and write no feature before the test for that feature, and only write enough code in each iteraction to make the test pass.

### The UI
Use the [prompt npm package](https://www.npmjs.com/package/prompt) to facilitate interaction with the user on the command line. You can use the [colors](https://www.npmjs.com/package/colors) package to spice up the terminal view.

Example prompt:

```bash
> Welcome the the Bangazon Continuing Ed Course Creator
  Please choose an action from the following:
    1 create a new course
    2 edit an existing course
    3 remove a course
    4 view an upcoming course
    5 view all upcoming courses
    6 view a past course
    7 view all past courses
```

The above would be a single prompt. When the user enters a number, use that value to choose what action to take. If view all, then call the appropriate method for fetching all the classes (which, of course, you build using TDD). If they want to add a new course, `prompt.get` again for that data:

```bash
  > Enter the course name:
  > Enter the instructor name:
  > Enter the start date:
  > Enter the end date:
  > Enter the number of seats:
```

Then take that data and save it to the db with a TDD-created save method.