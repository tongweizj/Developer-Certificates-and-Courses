The web pages you visit every day are based on three core technologies, **HTML, CSS, and JavaScript.** 

Together, they enable you to create web pages and applications so you can offer any content you have seen online. 

In this video, I will demonstrate two examples you can create using these technologies. This is to help you understand how they interact with one another. Don't worry, you won't need to deal with the details of the three languages just yet. 

##  first example: digital clock
In the first example, I'm building a web page that displays a digital clock. It shows the hour, minutes, and seconds. The time is updated every second. 
### html
I will work with three files, an HTML, a CSS, and a JavaScript file and you will explore the purpose of each one of them. 

To create the clock element, Let's first define our HTML code in a file called clock.html. The HTML code has an element that describes the content in hours, minutes, and seconds.If I only use the HTML file, the content would be shown without any style positioning or sizing, just simply as a display of six zeros representing time in the format of hours: minutes: seconds. 

### CSS
To apply styles to the HTML element, the HTML code references a CSS file called styles.css. The web browser retrieves the styles.css file and processes it. The CSS code provides styling for the clock. It tells the browser the ==position, size, color, background, and font type, and size== of each element on the screen. 

With that information, the browser updates the content and the sequence of zeros and colons now display a digital clock. 

Finally, we need to ensure the clock updates with the correct time. 
### JS

This is where JavaScript comes in. The HTML references a JavaScript file called clock.js. 
The browser will retrieve取回 clock.js and process it. 

The JavaScript file contains code that every second updates the content of the hour, minute, and second elements. 

With the three files created and linked together, your clock is fully functional. 
The clock example demonstrates JavaScript dynamically updating content. 
JavaScript can also be used for interaction交互. 

## example2:  video play 

The next example demonstrates how JavaScript can be used interactively. 
It's a web page that plays a video. 
Below the video, there is a button that plays or pauses the video. 
The button contains a play icon. 

### HTML
My HTML page describes the content, which is the video element and the Play button element. 
The HTML code references a CSS file that the browser retrieves. 
It applies the styling to the video and button. 
The code in the HTML file also references a JavaScript file. 
The browser will retrieve the videoplayer.js file and process it. 

### actions
In our example, the code in the JavaScript file performs four actions. 

Firstly, it registers a listener on the button that will execute some code when the button is clicked. 

The second function is that when the code runs, it checks the current state of the video. 

The result of that check is, if the video is currently stopped, it begins playing the video and changes the buttons icon to a stop icon. 

Or if the video is currently playing, it stops playing the video and changes the buttons icon to a play icon. 

Using the three files you create a fully interactive video player. 
### summary

A summary of your functioning video player application is when the user first sees a page, the video will be stopped by default. 

When they click the Play button, the button will change to a stop icon and the video will begin playing. 

When they click the button again, it will change back to a play button and the video will stop playing. 

I hope those examples give you an idea of how the three core files link and work together. 

In both the clock and video examples the HTML file references the CSS and the JavaScript files. 

The CSS file is called on to format and style your application, and the code in the JavaScript file implements the core functions of the app and user interactivity.
