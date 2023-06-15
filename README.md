# Simple-Jest-Example

Testing!  A topic close to my heart, as I love DevOps (very broadly, an adoption of automation tools and culture of people over tools over process)

There are many kinds of tests, like: integration, end to end (e2e), security, performance, hygiene...

But the simplest one of all is Unit Testing, and for that, we are going to use (Jest.js)[https://jestjs.io/]!

Unit tests are designed to test the smallest bits of code - usually just single functions.  It is an automated way of testing, on every new change to the code, that what you already built is still working as you expected.  I'm sure you can see how valuable that would be on a large application, with multiple developers working on the same code base!

To start, we want to install jest:

`npm i --save-dev jest`

In your package.json, be sure to change the test script to be (in this repo, I've already done it for you, though):

`"test": "node --experimental-vm-modules  node_modules/jest/bin/jest.js"`

The `--experimental...` flag allows us to work with the new experimental module for jest, that is designed to work with es6 javascript, instead of common javascript (think using 'import' statements, instead of 'require' statements!)

Jest test files should be names for the file that contains the functions we are testing, so to test `index.js`, we would create a new file, `index.test.js`.  This file can be located anywhere in your application - when run, Jest automatically checks for ANY files with the .test extension, and runs them.


Jest uses 'matchers', along with the method `expect` to test functions.  `expect` tells jest what it is testing, while the matcher, tells it what it is testing that thing against.

so we could say 

`expect(result).toBe(true)`, 

where the result is the result of the function we are testing, and 'toBe' is the matcher, that indicates what we are testing the 'result' against.

(Jest Matchers to Use with Expect)[https://jestjs.io/docs/expect]

### Truthy vs Falsy statements

>When non-boolean values are used in a boolean context, such as the condition of an if statement, they will be coerced into either true or false . Values that are coerced into true are called truthy and values that are coerced into false are called falsy.  

                                                                                            -- David Y, Sentry.io

In javascript, there are only a handful of values that will resolve into 'falsy':

        ```
        0
        -0
        0n <-- this is the `bigInt` version of zero
        '', "", ``  <--- all empty strings
        null
        undefined
        NaN

        ```
These are very useful for running conditional code, which is at the heart of a lot of javascript functions, from error handling, to deciding if a button should be displayed or not!


# Simple-Fetch-Example
 
In this simple example, we will be exploring Fetch API ! Yay!

The `fetch()` method is used for making a request a fetching a resource. So for example, let's say you want to retrieve some information from a server or a file, you would use `.fetch` to do that. 

The `fetch()` method returns a `promise` that resolves to the `response` to that request. Once a response is retrieved, there are a bunch of different ways to handle and display the data that it retrieved. 

A promise is an object that is returned by an asynchronous function, which `fetch()` most definitely is! 

Asynchronous as the name suggests means not occurring at the same time. Typically, executing things in sequence works well (one function after another), however, sometimes(most of the time) when you are retrieving data there will be a slight delay, instead of waiting until all the data is retrieved, you could use an async function such that the page loads and then when the data is all retrieved then display the data.

If you ever seen a slow loading page, you might see a cute little loading wheel or just the skeleton of the page, that is most likely an async function at work! 

With `fetch()` since it returns a promise, you need to use `try()` and `catch()` to handle it. 

        ```
        fetch(url)
            try(response => {
                // handle the response of the fetch ()
            })
            .catch(error => {
                // handle the error, if there is one
            });

        ```
If you want to see the results of our hard work, you can run the cats.html file using the vscode extension `liveserver` - after installing, right click on the html file, and select 'open with liveserver'

# Simple-FS-and-Jest-Example

Now, we bring it all together, but this time, instead of using fetch() to fetch data from an outside API,  we are going to use the node built-in method, fs (filesystem) to grab data from a data.json file.  We are using this data.json file to simulate how data is stored in a database, and you could use it to store data objects inside, to be fetched and used by your functions inside your app.

No need to install anything, node has this one built right in!  Commonly used features of the fs module include `fs.readFile` to read data from a file, `fs.writeFile` to write data to a file and replace the file if it already exists, `fs.watchFile` to get notified of changes, and `fs.appendFile` to append data to a file.

Note that these are asynchronous functions as well, so you will want to use your async/await syntax, and try/catch blocks!

To run Jest tests on simple asynchronous code, be sure to also include async/await in your test code:

        ```
        test('doSomething should return somethingDone', async () => {
            const somethingDone = await doSomething();
            expect(somethingDone).toBe(true);

        })

        ```


### More Resources
(Fetch API)[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API]
(Jest.js)[https://jestjs.io/]
(Jest Matchers to Use with Expect)[https://jestjs.io/docs/expect]