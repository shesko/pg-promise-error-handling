## Demonstration of query error handling for Pull request to pg-promise repository

This demo uses code from the Demo provideed by vitaly-t and located at https://github.com/vitaly-t/pg-promise-demo

All code has been removed except the part necessary to perform the user add command. A typo has been added unpurpously in the users file to demonstrate that the provided error message is not descriptive for this case. Pg-promise returns "Invalid query format." but a "Query is not defined" would be more appropriate.

### Prerequisites

* Node.js version 4.x or later

### Installation

* Set up an empty test database according to the connection details in file [JavaScript/db/index.js](https://github.com/vitaly-t/pg-promise-demo/blob/master/JavaScript/db/index.js),
  which you can also change to fit your test environment.
* Install Node.js dependencies by running `npm install` from the project's root folder

### Starting

Navigate to the projects's root folder:
```
$ cd JavaScript
```

Run the application:
```
$ node index.js
```