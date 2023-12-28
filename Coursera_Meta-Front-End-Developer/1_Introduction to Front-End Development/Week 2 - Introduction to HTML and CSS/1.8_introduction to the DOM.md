原文：Imagine your favorite social media site.
翻译：想象一下您最喜欢的社交媒体网站。

原文：If it was just an HTML document, users would be able to scroll the page,
翻译：如果只是一个HTML文档，用户将能够滚动页面，

原文：look at pictures and read text but they wouldn't be able to log in like posts or
翻译：查看图片和阅读文本，但他们将无法登录、点赞或者

原文：get notifications for new messages.
翻译：接收新消息的通知。

原文：In order to allow users to do these things, they need to be able to interact

翻译：为了让用户能够进行这些操作，他们需要能够与页面上的对象进行交互，

原文：with objects on the page such as the reaction icons or the comment button.

翻译：与页面上的对象进行交互，比如点赞图标或评论按钮。

原文：Let me put it differently, an HTML document must be represented in

翻译：让我用不同的方式来表达，HTML文档必须以特定方式表示，

原文：a certain way, so that JavaScript code can query and update it,

翻译：一种特定的方式，使得JavaScript代码能够查询并更新它，

原文：to do this we use the document object model.

翻译：为了实现这一点，我们使用文档对象模型（DOM）。

原文：In this video, I will unpack what the DOM is, how it is created and

翻译：在这个视频中，我将解释DOM是什么，它是如何创建的，

原文：how JavaScript interacts with the DOM to make sites dynamic.
翻译：以及JavaScript如何与DOM交互以实现网站的动态效果。

原文：When your web browser receives an HTML page, it constructs a DOM to represent it.
翻译：当您的网络浏览器接收到一个HTML页面时，它会构建一个DOM来表示它。

原文：DOM stands for Document Object Model and it is simply a tree, structure or
翻译：DOM代表文档对象模型，它只是一个树状结构或者说是一个

原文：model of the objects in your HTML file.
翻译：HTML文件中对象的模型。

原文：To understand the DOM, I want you to think of a simple HTML page, remember that
翻译：为了理解DOM，我希望您想象一个简单的HTML页面，记住

原文：an HTML document has opening and closing tags for the document and the head.
翻译：HTML文档有打开和关闭标签用于文档和头部。

原文：And inside the head tags you have title tags, then you have the body and
翻译：在头部标签内，您有标题标签，然后您有body标签，而在

原文：inside the body there might be elements such as div tags.
翻译：body标签内，可能会有诸如div标签之类的元素。

原文：Okay, now, let me guide you through how a DOM would be generated,
翻译：好的，现在，让我引导您了解DOM是如何生成的，

原文：the DOM has a series of objects each representing a single HTML element.
翻译：DOM由一系列的对象组成，每个对象代表一个单独的HTML元素。

原文：At the root of the DOM is the html object and it contains the head and body object.
翻译：在DOM的根部是html对象，它包含head和body对象。

原文：From there, the head object houses the title object and the title object contains its text object.
翻译：从那里开始，head对象包含了title对象，而title对象又包含了它的文本对象。

原文：The body object contains the two div objects, the first div houses,
翻译：body对象包含了两个div对象，第一个div包含了，

原文：the h1 object which again houses its text object.
翻译：h1对象，而h1对象又包含了它的文本对象。

原文：The second div object contains the paragraph object which contains its text object.
翻译：第二个div对象包含了paragraph对象，而paragraph对象又包含了它的文本对象。

原文：In summary, all the elements in the HTML file are represented as objects in the document object model.
翻译：总之，HTML文件中的所有元素都以对象的形式表示在文档对象模型中。

原文：I just took you through a very simple webpage,
翻译：我刚刚为您介绍了一个非常简单的网页，

原文：webpages typically have hundreds of elements.
翻译：网页通常有数百个元素。

原文：Can you imagine how complex the DOM of a highly interactive modern web page is?
翻译：您能想象一个高度交互的现代网页的DOM有多复杂吗？

原文：You as a developer can use JavaScript to access and modify the DOM to make your webpages dynamic.
翻译：作为开发者，您可以使用JavaScript来访问和修改DOM，使您的网页变得动态。

原文：In fact, in a later course you will learn how to access and modify the structure of the DOM and its elements in different ways.
翻译：事实上，在以后的课程中，您将学习如何以不同的方式访问和修改DOM的结构及其元素。

原文：Now that you know what the DOM is and how it is referenced,
翻译：现在您知道了什么是DOM以及它如何被引用，

原文：let me briefly explain common DOOM and JavaScript uses.
翻译：让我简要解释一下常见的DOM和JavaScript的用法。

原文：For each element, you can access the HTML attributes and content, this means you can update the existing content that is displayed in the web browser.
翻译：对于每个元素，您可以访问HTML属性和内容，这意味着您可以更新在Web浏览器中显示的现有内容。

原文：For instance, you could write some JavaScript to update the seconds, minutes and hours of a digital clock on a website.
翻译：例如，您可以编写一些JavaScript代码来更新网站上数字时钟的秒、分钟和小时。

原文：Or if you develop a movie streaming website, you can write code that responds to user actions such as clicking mouse over scrolling and so on.
翻译：或者，如果您开发了一个电影流媒体网站，您可以编写代码以响应用户的操作，如单击、鼠标悬停滚动等。

原文：In this way you can allow a preview of the movie to play when the user hovers the mouse over the movie's poster.
翻译：通过这种方式，当用户将鼠标悬停在电影海报上时，您可以允许播放电影的预览。

原文：Or you can think of a log in page, when users click the Login button, you can disable the button so that it cannot be clicked again.
翻译：或者，您可以考虑一个登录页面，当用户点击登录按钮时，您可以禁用按钮，使其无法再次点击。

原文：The web application would bring them to a new web page or would re-enable the button, if a log in error occurred.
翻译：如果发生登录错误，Web应用程序将引导他们到一个新的网页，或者重新启用按钮。

原文：You can even add DOM objects to dynamically add new HTML content to a live web page.
翻译：您甚至可以添加DOM对象，以动态地向现有的Web页面添加新的HTML内容。

原文：For instance, you can add an error message to a form if the user inserts invalid data, DOM objects can also be deleted which will remove the corresponding HTML displayed in the browser.
翻译：例如，如果用户插入了无效数据，您可以向表单添加错误消息，DOM对象也可以被删除，这将删除在浏览器中显示的相应HTML。

原文：Think of a to-do list on a website,
翻译：想象一下网站上的待办事项清单，

原文：you can remove an item from the list when the user clicks on it.
翻译：当用户点击时，您可以从列表中删除项目。

原文：Another major use of JavaScript and the DOM is to animate the HTML elements.
翻译：JavaScript和DOM的另一个主要用途是为HTML元素添加动画效果。

原文：This can be quite complex depending on the animation but there are many libraries available that aim to simplify this.
翻译：这可能会因动画而变得非常复杂，但有许多可用的库旨在简化此过程。

原文：For example, when a page first loads, you can fade in the page contents or when a user receives an instant message, a notification can pop up in the web browser.
翻译：例如，当页面首次加载时，您可以淡入页面内容，或者当用户接收到即时消息时，通知可以在Web浏览器中弹出。

原文：Many JavaScript libraries and frameworks rely on the DOM, one of these libraries is the react library.
翻译：许多JavaScript库和框架依赖于DOM，其中一个库就是React库。

原文：By now, you know what the DOM is, how it is constructed and the wonderful things web developers can do with it to create modern interactive websites.
翻译：到目前为止，您已经知道了DOM是什么，它是如何构建的，以及Web开发人员可以通过它来创建现代交互式网站的美妙事物。

原文：Next time you use your favorite social media site think about how the DOM is working behind the scenes to change the color of that like button.
翻译：下次您使用您最喜欢的社交媒体网站时，想想DOM是如何在幕后工作的，以改变那个“赞”按钮的颜色。
