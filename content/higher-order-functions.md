+++
title = "Map - an introduction to higher order functions in JavaScript"
date = "2018-07-14"
draft = false
+++

Higher order functions are functions that take other functions as parameters, and can be a highly useful type of abstraction.

Here's a good definition of higher order functions from [Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html):

>Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

A simple example of a higher order function would be [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## array.map()

Map takes a function as its argument, which runs on each element in the provided array and creates a new array containing the values returned by the function. Consider the following example:

{{<highlight js>}}
let numbers = ['10', '20', '30'];
let numbersDoubled = numbers.map(num => num * 2);
// numbersDoubled = [20, 40, 60]
{{</highlight>}}

In the above example we're iterating over the numbers array and creating a new array made up of the results of doubling each element in the first array.

Of course, you can achieve the same result in a less abstracted way with a loop like this:

{{<highlight js>}}
let numbers = ['10', '20', '30'];
let numbersDoubled = [];
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled.push(numbers[i] * 2);
}
// numbersDoubled = [20, 40, 60]
{{</highlight>}}

This code is fine, and would work for the situation described. In fact, since it is less of an abstraction than Array.map, it can be more flexible. For example we could use a for loop like this to construct a single, complex object or perform mutations on the original array. One of the benefits of map is that it doesn't let us do this, which makes it useful in a [functional programming](https://hackernoon.com/functional-programming-concepts-pure-functions-cafa2983f757) context, (where we would aim to avoid mutating existing values).

---

So Array.map will only ever return a new array, and in a case where we want to perform operations on every item in an array in order to produce a new array of results, map saves us a lot of the extra work (and a couple of lines of code) by abstracting away some repetitive elements, and makes for a good entry point into the basics of higher order functions.
