For Windows
======

Just run `node app.js`.
- The PhantomJS executable is already in the project directory

**PhantomJS would not properly parse the dates for the orders, so I am piping the output into node to do the console output.**


For Other OS
======

You would need to have the PhantomJS executable for your OS, and change the `spawn()` command in app.js