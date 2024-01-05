When building a webpage, 

it's considered good practice 

to do the layout and positioning of 

your HTML elements before 

working on their visual styling. 

Think of building a house. 

After all, you don't paint it first. 

Instead, you start with a foundation and structure. 

I'm going to take you through the process of 

building my HTML structure and 

positioning the elements so that you can follow 

along and note the placement of key elements for display. 

For this project, I chose 

the little lemon restaurant as the client persona. 

I've opened Visual Studio Code and I've 

created my index.html file 

with the semantic HTML document structure 

based on the bare-bones layout from Week 1. 

In my semantic structure, 

I use the header element for the logo, 

the nav element for the navigation bar, 

the main element for the main page content 

and the footer element for the footer. 

The navigation bar uses 

an unordered list for the navigation links. 

In the main element, 

I set up two section elements, 

one for each row of the content. 

Each row is its own element. 

I can use the flexbox layout to split 

the content into the required number of columns. 

I use the article element to represent each column. 

This is because the content of each column will be 

self-contained and not related to the other columns.

Play video starting at :1:19 and follow transcript1:19

I use a similar approach for 

splitting the footer into two columns. 

Except instead of using 

the article element for columns, I use a div element. 

This is because semantically 

the footer content should be considered as a whole. 

Additionally, it isn't important content 

for search engines and accessibility software. 

Since I want to split the footer 

visually into two columns, 

I use the div element to allow for the flexbox layout. 

I save the file and open the webpage in the web browser.

Play video starting at :1:51 and follow transcript1:51

The content is displaying on the webpage, 

but I need to layout and position the elements using CSS. 

I go back to Visual Studio Code and open 

styles.css in the CSS folder on the left. 

I already set up 

some rules for the body and heading elements. 

I decided to use REM as 

a unit of measurement for this project. 

The font sizes, margins, 

and padding properties of 

my CSS rules will all be REM values. 

The only exception to this rule is the body element where 

the left and right margins are set 

to five percent of the window size. 

Let's start by adding a rule to center the logo. 

I use an element selector to select 

the image element that is 

a descendant of the header element. 

I then apply three CSS properties to the CSS rule. 

First, I set the display property to block so that 

the element changes from 

an inline element to a block level element. 

Then I set the margin-left 

and margin-right properties to auto. 

These three properties together will 

center the logo inside of the header element. 

Next, I need to lay out the navigation menu horizontally. 

To do this, I add an element selector to select 

the unordered list element that 

is a descendant of the nav element. 

I then apply two CSS properties to the CSS rule. 

First, I set the list-style property to none 

to remove the bullet point 

as the beginning of each element. 

Then I set the text align 

property to center the inline elements. 

Next, I add another CSS rule. 

This time the selector will select 

the list item element that 

is a descendant of the nav element. 

I then apply the display property 

and set its value to inline-block. 

I save the file and open the webpage in the web browser.

Play video starting at :3:32 and follow transcript3:32

So far so good. 

Both the logo and the navigation bar is centered. 

Next, I need to set up the flexbox layout. 

I add another CSS rule using 

the element selector to select the section element. 

I then add the display property 

and set its value to flex.

Play video starting at :3:51 and follow transcript3:51

Next I add the CSS rule using 

the element selector to select the article element. 

I then set the flex property to 1. 

I saved the file and open the webpage in the web browser.

Play video starting at :4:8 and follow transcript4:08

Now, the main content is laid out correctly with 

one column in the first row 

and three columns in the second row. 

Finally, also the layout for the footer. 

First, add a CSS rule using 

the element selector to select the footer element. 

I then add the display property 

and set its value to flex. 

Then I add another CSS rule. 

This time the selector will select 

the development that is a 

descendant of the footer element. 

I then set the flex property to 1. 

I save the file again and 

open the webpage in the web browser. 

Success, the webpage elements are 

now laid out and positioned correctly.

Play video starting at :4:47 and follow transcript4:47

Laying out and positioning 

your HTML elements first will always save you 

time later on when you begin 

applying visual improvements in animations. 

Doing it this way, it means that your webpage has 

a good strong foundational layout to work 

from and to which you can add the paint and decor, 

the visual styling of your webpage. 

It takes some time to practice building 

your HTML structure and 

setting up the positioning of your elements.