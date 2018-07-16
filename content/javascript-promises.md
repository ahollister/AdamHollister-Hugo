+++
title = "JavaScript Promises"
date = "2018-03-16"
draft = false
+++

A JavaScript Promise is an object that can be used to handle asynchronous operations, which will either successfully resolve, or be rejected when an error occurs. Examples of this could be waiting on the response from an AJAX request before using that response data for further operations, or making requests to a database. Instead of relying on traditional callback functions, Promises allow us to chain functionality together off the results of these kinds of asynchronous function calls and handle any errors that occur.

__Here's a basic example of a Promise:__

{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise resolved message');
});
// 0ms - 1000ms, myPromise = Promise {<pending>}
// 1000ms +, myPromise = Promise {<resolved>: "Promise resolved message"}
{{</highlight>}}

So, starting off with a pretty unrealistic use case for the sake of explanation, here we can see that myPromise is created as a Promise object, which is pending. But once the setTimeout has triggered the resolve method, myPromise becomes a 'resolved' promise, (otherwise known as 'fullfilled'). The value of the third argument in the setTimeout is now passed to the resolved Promise and is accessible to .then() functions which chain off of it.

__For example:__
{{<highlight js>}}
let myPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise resolved message');
}).then(res => {
  console.log(res);
});
{{</highlight>}}

If you copy the above into a JS console and hit enter, you'll see that a second passes, then the message will be logged.
