+++
title = "JavaScript Promises - Basics"
date = "2018-03-16"
draft = false
+++

A JavaScript Promise is an object that can be used to handle asynchronous operations, which will either successfully resolve, or be rejected when an error occurs. Examples of this could be waiting on the response from an AJAX request before using that response data for further operations, or making requests to a database.

Instead of relying on traditional callback functions, Promises allow us to chain functionality off the results of these kinds of asynchronous function calls and handle any errors that occur.

__Here's a basic example of a Promise:__

{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('Promise resolved message')}, 1000);
});
// 0ms - 1000ms, myPromise = Promise {<pending>}
// 1000ms +, myPromise = Promise {<resolved>: "Promise resolved message"}
{{</highlight>}}

So, starting off with a pretty unrealistic use case for the sake of explanation, here we can see that myPromise is created as a Promise object, which is pending. But once the setTimeout has triggered the resolve method, myPromise becomes a 'resolved' Promise, (otherwise known as 'fullfilled'). To access the value that the Promise now contains, we'll need to call the .then() method.

__For example:__
{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('Promise resolved message')}, 1000);
}).then(res => {
  console.log(res);
});
{{</highlight>}}

The call to .then() occurs when the Promise has successfully resolved and the value exists for further operations. If you run the above example in a JS console you will see that a second passes, then the message is logged, since the Promise has now resolved with that value.

## Chaining .then()

One of the benefits of the .then() method is that we can chain them together and pass returned values from one to the next like so:

{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('Promise resolved message')}, 1000);
}).then(res => {
  console.log(res);
  return `${res} 1`;
}).then(str => {
  console.log(str);
  return `${str} 2`;
}).then(str => {
  console.log(str);
  return `${str} 3`;
}).then(str => {
  console.log(str);
  return str;
});
// 1000ms +, myPromise = Promise {<resolved>: "Promise resolved message 1 2 3"}
{{</highlight>}}

Once this Promise resolves, we'll see the following messages logged to the console:

{{<highlight html>}}
Promise resolved message
Promise resolved message 1
Promise resolved message 1 2
Promise resolved message 1 2 3
{{</highlight>}}

And the resolved value in the Promise will be the final returned value in the chain of .then() functions:

{{<highlight js>}}
myPromise = Promise {<resolved>: "Promise resolved message 1 2 3"}
{{</highlight>}}

## Error handling

In addition to .then(), Promises also have a .catch() method which we can use for catching errors and any values that the Promise is rejected with.

__For example:__

{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('Promise resolved message')}, 1000);
  setTimeout(() => {reject(new Error('Promise rejected'))}, 900);
}).then(res => {
  console.log(res);
  return res;
}).catch(err => {
  console.error(err);
  return err;
});
// 900ms +, myPromise = Promise {<resolved>: Error: Promise rejected at setTimeout (<anonymous>:3:28)}
{{</highlight>}}

Since the above Promise will be rejected after 900ms have passed, it will not resolve and the .then() method will never be called, instead the Promise rejection will trigger the .catch() method, where we're logging the contents of the Error. In a more real-world scenario this would be where we access the results of errors thrown, perhaps as a result of a malformed API call or database failure.

---

Some further resources:

- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Google - JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
