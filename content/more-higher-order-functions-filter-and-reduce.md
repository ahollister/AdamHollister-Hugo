+++
title = "More higher order functions - filter and reduce"
date = "2018-07-14"
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
