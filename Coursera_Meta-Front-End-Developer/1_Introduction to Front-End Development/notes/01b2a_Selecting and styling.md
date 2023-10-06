```
p{ // selector
  color:blue;  // color = property and blue = value
}
// 整一个， Declaration block
```
原文：I'd like you to think of a physical building and its structure, interior, exterior and decorations in a similar fashion.
翻译：我希望你能够想象一个实体建筑及其结构、内部、外部和装饰。

原文：When it comes to websites and web apps you can think of html as being the frame and structure.
翻译：涉及网站和Web应用程序时，你可以将HTML视为框架和结构。

原文：CSS, however, is the paint, wallpaper, fixtures, artwork and overall style or look and feel.
翻译：然而，CSS则是油漆、壁纸、固定装置、艺术品以及整体的样式或外观。

原文：In other words, CSS tells the web browser how to display html elements on screen.
翻译：换句话说，CSS告诉Web浏览器如何在屏幕上显示HTML元素。

原文：When using CSS, there are five elements you need to understand.
翻译：在使用CSS时，你需要了解五个元素。

原文：A declaration block starts with a left curly bracket and ends with the matching right curly bracket.
翻译：一个声明块以左大括号开头，以匹配的右大括号结尾。

原文：In between these curly brackets are the style declarations.
翻译：在这些大括号之间是样式声明。

原文：Let's cover these elements one by one.
翻译：让我们逐一介绍这些元素。

原文：The first element of the CSS rule is the selector. This indicates which html element or elements we want to style.
翻译：CSS规则的第一个元素是选择器。这表示我们要为哪个HTML元素或元素组设置样式。

原文：For example, you can create a rule that uses the h1 selector to change the color of all heading one tags in a web page to gray.
翻译：例如，你可以创建一个规则，使用h1选择器将网页中所有标题一标签的颜色更改为灰色。

原文：In this case, hi is the selector. Color is property and gray is the value of the property.
翻译：在这种情况下，hi是选择器。Color是属性，gray是属性的值。

原文：Now let's focus on the structure of the declaration block. Each declaration is made up of two parts a property and a value.
翻译：现在让我们关注声明块的结构。每个声明由两部分组成：属性和值。

原文：For example, in this case the properties that you want to change are the color and the background color of the header or selector.
翻译：例如，在这种情况下，您要更改的属性是标头选择器的颜色和背景颜色。

原文：Once you have decided which properties you want to define, then you must assign each property of value.
翻译：一旦确定要定义哪些属性，您必须为每个属性分配一个值。

原文：The color property gets a value of blue and the background color property gets a value of gray.
翻译：颜色属性的值为蓝色，背景颜色属性的值为灰色。

原文：This will result in all heading one tags displaying blue text on a gray background in the browser.
翻译：这将导致所有的标题一标签在浏览器中显示蓝色文本，背景为灰色。

原文：By now, you have learned that CSS tells the web browser how to display html elements on screen.
翻译：到目前为止，您已经了解到CSS如何告诉Web浏览器如何在屏幕上显示HTML元素。

原文：Now, let's work through an example to change a set of heading elements using different CSS rules.
翻译：现在，让我们通过一个示例来改变一组标题元素，使用不同的CSS规则。

原文：I will share a pro tip demonstrating how to install and use the VS code extension live preview to speed up your workflow.
翻译：我将分享一个专业技巧，演示如何安装和使用VS Code扩展的实时预览功能，以加快工作流程。

原文：Okay, so I'm back in visual studio code here.
翻译：好的，我回到了Visual Studio Code。

原文：Did you know that you can add additional functionality by using extensions.
翻译：你知道吗？你可以通过使用扩展来添加额外的功能。

原文：If you click on the extensions tab, you can install the live preview extension by Microsoft.
翻译：如果你点击扩展选项卡，你可以安装Microsoft的实时预览扩展。

原文：If you are running VS code locally, you can install and use this extension.
翻译：如果你正在本地运行VS Code，你可以安装并使用这个扩展。

原文：Once installed, right click on your html file in the explorer panel and select live preview, show preview.
翻译：安装完成后，在资源管理器面板中右键单击你的HTML文件，然后选择实时预览，显示预览。

原文：When you update an html file, you immediately notice the changes in visual studio code.
翻译：当你更新HTML文件时，你会立即在Visual Studio Code中看到变化。

原文：In this video, I will demonstrate how to create a CSS file and style some html elements.
翻译：在这个视频中，我将演示如何创建一个CSS文件并为一些HTML元素设置样式。
（继续）

原文：Before I start styling elements, let's create a simple html document named index.html.
翻译：在开始设置样式之前，让我们创建一个名为index.html的简单HTML文档。

原文：To demonstrate how CSS works, I will use an example created previously.
翻译：为了演示CSS的工作原理，我将使用之前创建的一个示例。

原文：Next I create a file named style.CSS.
翻译：接下来我创建一个名为style.CSS的文件。

原文：For my web page to use the CSS file, I need to link it to the head element of the html file.
翻译：为了让我的网页使用CSS文件，我需要将它链接到HTML文件的head元素。

原文：To link to a style sheet, you use the link tag which must be assigned to attributes rel and h ref.
翻译：要链接到样式表，你需要使用link标签，该标签必须分配给rel和href属性。

原文：The rel attribute is assigned to style sheet and the href attribute is assigned to the name of the style sheet file. In this example, it's style.CSS.
翻译：rel属性被分配为style sheet，href属性被分配为样式表文件的名称。在这个例子中，它是style.CSS。

原文：I am now ready to apply CSS to the index.html file using style rules that I will write in the style.CSS file.
翻译：我现在已经准备好使用我将在style.CSS文件中编写的样式规则来应用CSS到index.html文件中。

原文：The selector I'm creating applies the CSS rule to all h1 elements. This type of selector is called an html type selector.
翻译：我正在创建的选择器将CSS规则应用于所有的h1元素。这种类型的选择器称为HTML类型选择器。

原文：The properties in the declaration block allow me to change how the selected elements are displayed.
翻译：声明块中的属性允许我更改所选元素的显示方式。

原文：For example, I'm setting the color property of all the h1 elements to display text and purple.
翻译：例如，我正在设置所有h1元素的颜色属性以显示文本为紫色。

原文：I save the file using Ctrl and S, notice that this change occurs immediately, and there is no need to refresh the webpage.
翻译：我使用Ctrl和S保存文件，注意到这个变化立即发生，无需刷新网页。

原文：So now what if I want to only style a single h1 element? I can add an ID attribute to the tag h1 that I want to style.
翻译：那么现在如果我只想为一个单独的h1元素设置样式怎么办？我可以为我想要设置样式的h1标签添加一个ID属性。

原文：And in my CSS file, I create a rule for that ID. Let's do that now.
翻译：然后在我的CSS文件中，我为那个ID创建一个规则。我们现在就来做。

原文：First, I create an ID rule using the hash symbol and then the name header one. Then I define the CSS properties of that rule to change the color value to green. I apply the rule and save the file using Ctrl and S.
翻译：首先，我使用井号符号创建一个ID规则，然后是名称header one。然后我定义该规则的CSS属性，将颜色值更改为绿色。我应用这个规则并使用Ctrl和S保存文件。

原文：Notice that the text for the heading, chapter one on the web page turns green.
翻译：注意到网页上标题“chapter one”的文本变成了绿色。

原文：You may be wondering, why does the first CSS rule not apply to the h1 element with the ID? This is because of something called CSS precedents and specificity. This is a complex statement, but basically the browser will use the most precise selector for an html element. CSS has a set of hierarchy rules which dictate which rule will apply to an element. In this example, the ID rule takes precedence over the html type selector rule. You can learn more about CSS selector rules and precedents from the additional reading at the end of this lesson.
翻译：你可能会想，为什么第一个CSS规则不适用于具有ID的h1元素？这是因为一个叫做CSS优先级和特异性的东西。这是一个复杂的说法，但基本上浏览器会为HTML元素使用最精确的选择器。CSS有一套层级规则，决定了哪个规则将应用于一个元素。在这个例子中，ID规则优先于HTML类型选择器规则。你可以从本课程末尾的附加阅读中了解更多关于CSS选择器规则和优先级的内容。

原文：Congratulations, you have now learned about the selection and styling in CSS. Let's quickly recap. After choosing a selector for your styles, you create a declaration block using opening and closing curly brackets. Inside of the code block, you write a declaration which consists of a property value pair ending in a semi colon. And all these parts together. The selector code block and declaration make up a CSS rule. I encourage you to add some CSS rules to your html documents to practice selecting and styling.
翻译：恭喜你，你现在已经学会了CSS中的选择和样式设置。让我们快速回顾一下。在选择样式选择器之后，你使用大括号来创建一个声明块。在代码块内部，你写一个声明，其中包含以分号结尾的属性值对。所有这些部分加在一起。选择器、代码块和声明组成了一个CSS规则。我鼓励你在你的HTML文档中添加一些CSS规则，以练习选择和样式设置。
