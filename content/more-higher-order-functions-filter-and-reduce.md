+++
title = "More higher order functions - filter and reduce"
date = "2018-03-14"
draft = false
+++

OK now that we know a little about what higher order functions are and we've had a look at the Array.map example, ([see previous post]({{< relref "higher-order-functions.md" >}})), lets take a look at a couple of other frequently used examples of higher order functions in JS.

## Array.filter()

You can pretty much guess what [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) does from the name. It filters an existing array and returns a new array of filtered results. More specifically, it tests each element in the given array against a function that returns a boolean, if the result of the function is true, the element passes the test and is added to the resulting array.

__Here is a basic example:__

{{<highlight js>}}
let mixedArray = [1, "one", 2, "two", 3, "three", 4, "four", 5, "five"];
let numbersArray = mixedArray.filter(el => Number.isInteger(el));
// numbersArray = [1, 2, 3, 4, 5]
{{</highlight>}}

We start with an array of mixed types, integers and strings, and we want to get an array which only contains the integers. Filter loops over the mixedArray and passes each value to Number.isInteger, which returns true when the current element is an integer. All the elements that pass this 'test' are added to the resulting array and we end up with an array containing only the integers.

## Array.reduce()

The basic concept of [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) in JavaScript is that it iterates over an array and allows us to perform operations on each item, kind of similar to Array.map, but unlike the map function, reduce also passes the result of the previous operation to the function used in the next iteration.

__Here's an example:__

{{<highlight js>}}
let count = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// count = 15
{{</highlight>}}

Here we're using reduce to simply count up the total of the numbers in the starting array. Reduce loops through the array, adding the previous number to the 'accumulator', which is the value returned by the previous loop.

Reduce also takes a second argument as it's starting value, which in our case is 0 since that's what where we want to start the count.

Reduce can be quite a bit more flexible than map and filter, which have fairly specific use cases. For example, we could use reduce on our mixedArray from the filter example to count both the sum of the numbers, and the number of words in the array at the same time.

{{<highlight js>}}
let mixedArray = [1, "one", 2, "two", 3, "three", 4, "four", 5, "five"];
let countObj = mixedArray.reduce((accumulator, currentValue) => {
	if (typeof(currentValue) === 'number') {
		accumulator.total += currentValue;
	} else if (typeof(currentValue) === 'string') {
		accumulator.wordCount++;
	}
	return accumulator;
}, {
	total: 0,
	wordCount: 0,
});
// countObj = { total: 15, wordCount: 5 }
{{</highlight>}}

We pass an object with a couple of properties as our initial value, and use the function to either add the number to the existing sum, or tally up a word count, based on type.

---

So to summarise, Array.filter can be used to filter out items in an array and return a new array with just the elements that pass a provided 'test'. And reduce can be used in any cases where we want to perform operations on array items where we also need access to the previous result.
