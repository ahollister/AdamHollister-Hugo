+++
title = "Higher order functions in JavaScript"
date = "2018-07-14"
+++

Higher order functions are functions that take other functions as parameters, and can be a highly useful type of abstraction.

Here's a good definition of higher order functions from [Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html):

>Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

A simple example of a higher order function would be the [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function in ES6.

Map takes a function as its argument, which runs on each element in the provided array and creates a new array containing the values returned by the function. Consider the following example:

{{<highlight js>}}
let numbers = ['10', '20', '30'];
let numbersDoubled = numbers.map(num => {
  return num * 2;
});
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

Looking at these two examples, we can see the trade-off inherent in abstraction itself.

The map function removes the need for us to manually set up an empty array, count the number of elements in the original array in order to loop over them, etc. However, introducing the layer of abstraction by using the map function is also restrictive in some ways. A simple for loop can be used for any number of things that require iteration, for example constructing a single complex object, whereas a map function can only be used where the desired outcome is a new array based on the return values.

The distinction in this case is obvious, and

 but when building more complex systems of functionality it can be easy to get caught up in the excitement of abstractions which appear to make our lives easier. This is fine, so long as those abstractions do not
