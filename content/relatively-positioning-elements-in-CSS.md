+++
title = "Relatively position elements in CSS"
date = "2016-03-27"
+++

Positioning elements relative to their container is something that comes up often when writing CSS for a website. You might be trying to position a little triangle under hovered nav links, or place a badge in the top-right corner of your website, both of these are use-cases where you might need to position elements relative to other elements.

The technique to achieve this is relatively simple. Let’s say I want to position an orange square inside a gray container.

### First the HTML:
{{< highlight html >}}
<div class="container">
  <div class="orange-square"></div>
</div>
{{< / highlight >}}

### Now the CSS:
{{< highlight css >}}
.container {
  position: relative;
  width: 200px;
  height: 200px;
  background: #2d2d2d;
}
.orange-square {
  position: absolute;
  width: 50px;
  height: 50px;
  background: orange;
  top: 10px;
  left: 50px;
}
{{< / highlight >}}

### The result:

<iframe height='359' scrolling='no' title='Positioning elements 1' src='//codepen.io/aaahollister/embed/YqQLLz/?height=359&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aaahollister/pen/YqQLLz/'>Positioning elements 1</a> by Adam Hollister (<a href='https://codepen.io/aaahollister'>@aaahollister</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

So you can see above that I’ve given the container position: relative, which sets the positioning context of the orange-square. Now we can take the orange square and give it position: absolute. Normally this would allow you to position this element relative to the body tag, but now it is being positioned relative to the container instead.

In the example above I’ve positioned the orange square ten pixels from the top and 50 from the left of the container, but you can also use percentages for more responsive positioning.

### Try resizing your browser on this example:

<iframe height='265' scrolling='no' title='Positioning elements 2' src='//codepen.io/aaahollister/embed/pywVYV/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aaahollister/pen/pywVYV/'>Positioning elements 2</a> by Adam Hollister (<a href='https://codepen.io/aaahollister'>@aaahollister</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

We can also use percentage values for the width of the orange square, and the width will be calculated as a percentage of the containers width.

<iframe height='265' scrolling='no' title='Positioning elements 4' src='//codepen.io/aaahollister/embed/vGZjqG/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aaahollister/pen/vGZjqG/'>Positioning elements 4</a> by Adam Hollister (<a href='https://codepen.io/aaahollister'>@aaahollister</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Using this technique to perfectly center elements

Now that we can position our orange square relative to the container, how can we get it to sit perfectly in the middle, regardless of the size or shape of the container?

You might think the answer is to set the left and top properties of the orange box using percentage values like this:

{{< highlight css >}}
.orange-square {
  top: 50%;
  left: 50%;
}
{{< / highlight >}}

However the CSS above results in this:

<iframe height='265' scrolling='no' title='Positioning elements 3' src='//codepen.io/aaahollister/embed/vGZjwL/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aaahollister/pen/vGZjwL/'>Positioning elements 3</a> by Adam Hollister (<a href='https://codepen.io/aaahollister'>@aaahollister</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This is because when we position the orange square, the co-ordinates that are being assigned relate to the top left corner of the square, not the center.

We can overcome this problem by using CSS transforms to pull the box left and up by 50% of it’s height and width.

{{< highlight css >}}
.orange-square {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
{{< / highlight >}}

Here we are using a CSS transform to translate the position of the orange square 50% of it’s width left and up (in that order) with translate(-50%, -50%).

<iframe height='265' scrolling='no' title='Positioning elements 5' src='//codepen.io/aaahollister/embed/BKZVyd/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aaahollister/pen/BKZVyd/'>Positioning elements 5</a> by Adam Hollister (<a href='https://codepen.io/aaahollister'>@aaahollister</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

So now we can position an element relative to it’s container and place it where we want using position: absolute and the top, bottom, left and right properties. We can use percentage values instead of pixels for stretchier elements and more responsive positioning. Finally we’ve also learned how to use this technique combined with CSS transforms to perfectly and responsively center elements inside their container.
