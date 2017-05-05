// Do your work in this file.
// 1. [Fork this repo][fork].

// 1. Only code inside the file named `script.js`. No editing any other files.

// 1. Create a `div` element with a class name of "**view**" and append it to the document `body` using jQuery. You can use [append], [appendTo], or any other jQuery method.


var view = $("<div class='view'></div>").appendTo("body");


// 1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.

var grass = $("<div class='grass'></div>").appendTo(view);


// 1. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.


var sun = $("<div class='sun'></div>").appendTo(view);

// 1. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.
i = 0
while (i <=5) {
var ray = $("<div class='ray-" + i + "'></div>").appendTo(sun);
i++;
}

// 1. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.

var mountain = $("<div class='mountain'></div>").appendTo(view);

// 1. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.

var mountainTop = $("<div class='mountain-top'></div>").appendTo(mountain);

// 1. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.

y = 0
do { 
var mountainCap = $("<div class='mountain-cap-" + y + "'></div>").appendTo(mountainTop);
y++;
} while (y <=3)

// ### What the HTML should look like when you're done.