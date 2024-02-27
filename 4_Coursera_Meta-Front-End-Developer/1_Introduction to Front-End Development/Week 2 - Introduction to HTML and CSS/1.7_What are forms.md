
form 输入类型
text, password, checkbox, radio, text area and select
 
Today you can order almost anything directly to your home. 
But did you know that one of the functionalities that makes online shopping possible is HTML forms. 
Without them, you would not be able to enter your credit card details during checkout. 
But forms are not limited to e commerce. 
You can use forms practically every day on the internet. 
When you log into your favorite website, you do it using a form. 
In this video, I'll take you through the steps to create a form and introduce you to a few different input types. 
But first, let's briefly explore how forms work. 
To put it simply when a user enters data on a website an HTML form submits an HTTP request containing the data to the server. 
But how do you create a form in the first place? 
You define forms with the html form tags. 
Forms also have an optional form attribute called action. 
Actions specifies the URL or path that the form should submit the request to. 
When the action attribute is not specified, it submits the request to the same path as the current web page. 
There is also the FORM method, with the FORM method you can specify the HTTP method to use for the HTTP request. 
There are two HTTP methods to submit the form data, GET and POST. 
Remember the GET HTTP method retrieves information from the server. 
The POST HTTP method sends data to the server. 
When a user submits a form, one of these HTTP methods is used. 
We'll explore how this is done on a later course. 
Now let's explore how to add fields that the user can enter data into. 
First, let's add a simple text field. 
For example, a user name field. 
The fields in a form are specified by input tags. 
Note that the input tag does not need a closing tag. 
But if I want to, I could close the tag by adding a forward slash before the end of the input tag. 
When I use the text input type, it displays a text field on the web page. 
But a text box on its own isn't very user friendly, so I will now add a label above it. 
By adding the label tag, the form will now display the word user name above the input field. 
Next, let's add a password field. 
In this case I won't use the text input type since I don't want the password to be visible. 
HTML has an input type specific for passwords that will mask the user's input data. 
The user name will be visible and the password will be masked. 
Finally, I need to add a button so the user can submit the form. 
So I used the input type, submit. 
When the user clicks the submit button, the HTTP request containing the form content will be sent to the web server. 
In summary, you use the form tag at the start of a form where after you indicate the method that should be used. 
You can create labels for input types with the label tag, you use the text input type for a text input like a user name. 
For a password, you use the password input type. 
To add a submit button to a form, you use the submit input type. 
There are many different input types available. 
For example, you can add checkboxes to a form. 
To do this, you use the checkbooks input type. 
Each box can be checked or unchecked. 
You use the name and value attributes to configure how the data is sent to the server, you will explore this in more depth in a later course. 
Radio buttons on the other hand are like checkboxes except only one button can be checked in on the group. 
Checking one radio button will uncheck all the other radio buttons. 
There are also other types of inputs such as the number, email and file upload types. 
However, some input fields do not use the input tags. 
For instance the multi line text field. 
The text input type that I showed you earlier is only for single line text content.
今天，您几乎可以直接订购任何东西到您家。但是您知道吗，使在线购物成为可能的功能之一是HTML表单。没有它们，您将无法在结账时输入您的信用卡详细信息。但形式不仅限于电子商务。您几乎每天都可以在互联网上使用表格。当您登录自己喜欢的网站时，您可以使用表单进行操作。在此视频中，我将引导您完成创建表单的步骤，并向您介绍几种不同的输入类型。但首先，让我们简要探讨一下表单的工作原理。简单地说，当用户在网站上输入数据时，HTML表单向服务器提交包含数据的HTTP请求。但是，您首先如何创建表单？您可以使用 html 表单标记定义表单。表单还具有一个名为 action 的可选表单属性。操作指定表单应向其提交请求的 URL 或路径。如果未指定 action 属性，它将请求提交到与当前网页相同的路径。还有 FORM 方法，使用 FORM 方法，您可以指定用于 HTTP 请求的 HTTP 方法。有两种 HTTP 方法可以提交表单数据，GET 和 POST。 请记住，GET HTTP 方法从服务器检索信息。POST HTTP 方法将数据发送到服务器。当用户提交表单时，将使用这些 HTTP 方法之一。我们将在后面的课程中探讨如何做到这一点。现在，让我们探讨如何添加用户可以在其中输入数据的字段。首先，让我们添加一个简单的文本字段。例如，用户名字段。表单中的字段由输入标记指定。请注意，输入标签不需要结束标签。但是，如果我想，我可以通过在输入标签末尾之前添加正斜杠来关闭标签。 当我使用文本输入类型时，它会在网页上显示一个文本字段。但是文本框本身不是很用户友好，所以我现在将在其上方添加一个标签。通过添加标签标签，表单现在将在输入字段上方显示单词用户名。接下来，让我们添加一个密码字段。在这种情况下，我不会使用文本输入类型，因为我不希望密码可见。HTML 具有特定于密码的输入类型，该类型将屏蔽用户的输入数据。用户名将可见，密码将被屏蔽。最后，我需要添加一个按钮，以便用户可以提交表单。所以我使用了输入类型，提交。当用户单击提交按钮时，包含表单内容的 HTTP 请求将被发送到 Web 服务器。总之，您可以在表单的开头使用表单标记，在您指示应使用的方法之后。您可以使用标签标签为输入类型创建标签，也可以将文本输入类型用于文本输入，如用户名。对于密码，请使用密码输入类型。若要向表单添加提交按钮，请使用提交输入类型。有许多不同的输入类型可用。例如，您可以向表单添加复选框。为此，请使用支票簿输入类型。可以选中或取消选中每个框。您可以使用名称和值属性来配置如何将数据发送到服务器，您将在后面的课程中更深入地探讨这一点。另一方面，单选按钮类似于复选框，只是只能在组中签入一个按钮。选中一个单选按钮将取消选中所有其他单选按钮。还有其他类型的输入，例如数字、电子邮件和文件上传类型。但是，某些输入字段不使用输入标记。例如，多行文本字段。 我之前向您展示的文本输入类型仅适用于单行文本内容。

To allow users to enter multiple lines of text, I need to use the text area tag instead of text input type. 
Another type of input that does not use the input tag is a drop down list which contains items that the user can select. 
This time, you use the select tag and for the items on the list you use option tags. 
You now know how HTML forms work and the different input types, developers use. 
You covered form tags such as text, password, checkbox, radio, text area and select. 
I can't imagine my life without online shopping. 
Next time you order something online, notice all the types of input the form includes and how you, as a user interacts with it. 
You might notice that the user experience of some forms is better than others. 
I'm sure that you are now able to choose appropriate input types for the forms that you create.
为了允许用户输入多行文本，我需要使用文本区域标签而不是文本输入类型。另一种不使用输入标记的输入类型是下拉列表，其中包含用户可以选择的项目。这一次，您使用选择标签，对于列表中的项目，您使用选项标签。您现在了解了 HTML 表单的工作原理以及开发人员使用的不同输入类型。您涵盖了表单标签，例如文本，密码，复选框，单选，文本区域和选择。我无法想象没有网上购物的生活。下次您在线订购商品时，请注意表单包含的所有类型的输入以及您作为用户如何与之交互。您可能会注意到某些窗体的用户体验比其他窗体更好。我相信您现在可以为您创建的表单选择适当的输入类型。