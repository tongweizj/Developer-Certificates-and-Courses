原文：In this video, I will guide you to the blueprints of a HTML document.
翻译：在这个视频中，我将引导您了解 HTML 文档的蓝图。

原文：I will create a very simple webpage for a restaurant called Little Lemon.
翻译：我将为一个名为“小柠檬”的餐厅创建一个非常简单的网页。

原文：The great thing about HTML documents is that you don't need the web to view them.
翻译：HTML 文档的一个伟大之处在于您不需要网络即可查看它们。

原文：Yes, they don't have to be hosted on a web server for you to view them in your web browser.
翻译：是的，它们不必存放在网络服务器上，您就可以在您的网络浏览器中查看它们。

原文：You can save HTML files on your computer and viewed them locally with your web browser, almost like eating takeaways at home.
翻译：您可以将 HTML 文件保存在您的计算机上，并在本地用您的网络浏览器查看它们，几乎就像在家里享用外卖一样。

原文：By the end of this video, you'll be able to identify the structure of a HTML document and create a basic webpage.
翻译：在本视频结束时，您将能够识别 HTML 文档的结构并创建一个基本的网页。

原文：To create a HTML file and Visual Studio Code. Right-click in the Explorer panel and select New File.
翻译：要在 Visual Studio Code 中创建一个 HTML 文件，请在资源管理器面板中右键单击，然后选择“新建文件”。

原文：I'll name it index.html.
翻译：我将它命名为 index.html。

原文：By now you know that HTML documents are made up of elements and tags.
翻译：到目前为止，您已经知道 HTML 文档由元素和标签组成。

原文：But before I can add elements or tags, I first need to create a standard HTML structure which starts with the DOCTYPE declaration.
翻译：但在我添加元素或标签之前，我首先需要创建一个以 DOCTYPE 声明开头的标准 HTML 结构。

原文：This notifies the web browser that is a HTML documents.
翻译：这会通知网络浏览器这是一个 HTML 文档。

原文：Next, I create the HTML tag, which is also known as the HTML root element.
翻译：接下来，我创建 HTML 标签，也被称为 HTML 根元素。

原文：Inside the HTML tag, I add two main elements. The head and the body elements.
翻译：在 HTML 标签内，我添加了两个主要元素。头部和正文元素。

原文：Is important to note that nothing inside the head element is displayed on the webpage in the web browser.
翻译：需要注意的是，头部元素内的内容在网页浏览器中不会显示出来。

原文：In the head element, you add information or metadata about the HTML documents.
翻译：在头部元素中，您可以添加关于 HTML 文档的信息或元数据。

原文：It is not part of the content of the webpage.
翻译：它不是网页内容的一部分。

原文：For example, inside the head tag, you always create the title elements. This is the title that is displayed in the web browser tab.
翻译：例如，在头部标签内，您总是创建标题元素。这是显示在网页浏览器标签中的标题。

原文：I can also link to CSS files and define Meta tags in the head section. Meta tags can, for instance, specify the description of the web page, keywords for search engines and the order of the web page.
翻译：我还可以在头部部分中链接到 CSS 文件并定义元标签。元标签可以用来指定网页的描述、搜索引擎关键字以及网页的顺序。

原文：Next up, I add the content of the webpage inside the body tag. The body can contain elements such as headings, paragraphs, images, and videos.
翻译：接下来，我在正文标签中添加网页的内容。正文可以包含标题、段落、图片和视频等元素。

原文：Let me start by adding a main heading on the webpage by using the H1 tag. Inside the H1 tag, I typed the heading, Our Menu.
翻译：让我从使用 H1 标签在网页上添加一个主标题开始。在 H1 标签中，我键入了标题，“我们的菜单”。

原文：That's good. Now I need to start creating my menu. I want to add two items. To do that, I add two subheadings. For this, I use the H2 tag. The menu items in the subheadings are falafel and pasta salad.
翻译：很好。现在我需要开始创建我的菜单。我想要添加两个项目。为此，我添加了两个副标题。为此，我使用 H2 标签。副标题中的菜单项目是沙拉和意大利面沙拉。

原文：In order to make sure everything is correct, I open my index.html file in the browser to check my webpage.
翻译：为了确保一切都正确，我打开浏览器中的 index.html 文件以检查我的网页。

原文：But first I need to save the file by pressing the keys Control and S or if you're on a Mac, Command and S.
翻译：但首先我需要通过按下 Ctrl 和 S 键（如果您使用的是 Mac，则是 Command 和 S 键）来保存文件。

原文：Now, I right-click on my index.html file in the explorer panel and select Reveal in File Explorer. If you're not using Windows, this may be called revealing finder or reveal in file browser.
翻译：然后，我在资源管理器面板中右键单击我的 index.html 文件，然后选择“在文件资源管理器中显示”。如果您没有使用 Windows，这可能被称为“显示查找器”或“在文件浏览器中显示”。

原文：Now the file browser opens and lists the file. I double-click on index.html and it opens in the web browser.
翻译：现在文件浏览器打开并列出了文件。我双击 index.html 文件，它会在网页浏览器中打开。

原文：Great, it's all there. The title that displays in the browser tab matches the title that I added to the head section and the content is displayed in the browser window but it is still a bit empty.
翻译：太好了，一切都在那里。在浏览器标签中显示的标题与我添加到头部部分的标题匹配，内容显示在浏览器窗口中，但仍然有点空。

原文：I go back to Visual Studio Code and add a short description for each dish. I do this by adding a paragraph tag below each subheading H2. Let's imagine a nice falafel. I type chickpea, herbs, and spices. What goes into the pasta salad again? Lettuce, vegetables, and mozzarella. Yummy.
翻译：我回到 Visual Studio Code，为每道菜添加一个简短的描述。我通过在每个副标题 H2 下面添加一个段落标签来实现这一点。让我们想象一个美味的沙拉卷。我输入鹰嘴豆、香草和香料。意大利面沙拉里放了什么？生菜、蔬菜和马苏里拉奶酪。美味。

原文：I save the file again to update the changes. Again, I open it in my web browser. There you go. Now the ingredients are also included in the menu.
翻译：我再次保存文件以更新更改。然后，我在我的网络浏览器中打开它。就是这样。现在菜单中还包括了食材。

原文：Some of the best websites are websites about food. Whenever you need some inspiration, search for food website ideas online, you will be fascinators.
翻译：一些最好的网站是关于食物的网站。无论何时您需要一些灵感，都可以在线上寻找食物网站的创意，您会被吸引。

原文：Now that you know some basic HTML tags, try to identify where they were using those websites. There are many HTML tags that you can use in your webpages. But now you're familiar with the few elementary ones and I encourage you to start practicing with them. Best of luck.
翻译：既然您已经了解了一些基本的 HTML 标签，试着在这些网站上识别它们的使用位置。您可以在网页中使用许多 HTML 标签。但现在您已经熟悉了一些基本标签，我鼓励您开始练习使用它们。祝您好运。
