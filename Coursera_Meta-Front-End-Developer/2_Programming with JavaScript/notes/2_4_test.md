## Types of testing

段落 1: 英文原文
As a developer, you are tasked to test a piece of software, how would you do it in the next few minutes.
段落 1: 中文翻译
作为开发者，你被要求测试一款软件，你将如何在接下来的几分钟内完成这项任务。

段落 2: 英文原文
I am going to explain what software testing is. I'm going to introduce you to the three most used types of testing. You might say that testing a piece of software at a high level means making sure that it behaves as expected in any modern software development project. These expectations are recorded as software requirements. There are many ==aspects== of software testing, but for now let's think of it as the act of confirming that it works as ==outlined== in the software's requirements.
段落 2: 中文翻译
我将解释什么是软件测试。我将向你介绍三种最常用的测试类型。你可以说，在较高层次上测试一款软件意味着确保它在任何现代软件开发项目中都能按预期运行。这些预期通常以软件需求的形式记录下来。软件测试有许多方面，但现在让我们将其视为确认软件是否按照需求规定的方式运行的行为。

段落 3: 英文原文
Now that I have a working definition of testing, let's think about how you might approach it for a UX designer. Testing might mean making sure that the website looks and behaves as expected. For a project manager on a software project, testing might mean that a specific piece of software works well with other parts of your system. For a software engineer, testing might mean writing code that doesn't break the existing functionality, is bug-free, and satisfies the requirements as set out in a given task. Based on what your motivations are, there are several ways that you can test your software projects practically. This means that there are different kinds of testing.
段落 3: 中文翻译
现在我已经有了一个可用的测试定义，让我们思考一下UX设计师可能如何对待它。对于UX设计师，测试可能意味着确保网站的外观和行为与预期相符。对于软件项目的项目经理，测试可能意味着特定的软件部分与系统的其他部分良好协同工作。对于软件工程师，测试可能意味着编写不会破坏现有功能的代码，没有错误，并满足给定任务中所规定的需求。根据你的动机，你可以实际测试你的软件项目的几种方式。这意味着有不同类型的测试。

段落 4: 英文原文
Now, I'll discuss the following three types of testing: 
- End-to-End testing,
- Integration testing,
- and Unit testing. 
Let's start with End-to-End testing.
段落 4: 中文翻译
现在，我将讨论以下三种类型的测试：端到端测试，集成测试和单元测试。让我们从端到端测试开始。

段落 5: 英文原文
A real-life example of End-to-End testing would be if a laptop manufacturer let his employees open some off the assembly line laptops, turn them on, and use them just like a normal user would do to make sure that the entire end product behaves as it should. More specific to web development, End-to-End testing tries to imitate how a user might interact with your app. This means that in End-to-End testing, you need to open your web application in a browser and then test it by interacting with the page the same way a user might interact with it. For example, clicking on the login button or going through the process of adding an item to the shopping cart. In other words, you're testing the entire finished software product from the perspective of the end user. Now here's something you may find interesting: The person testing the app doesn't have to be a developer. Finally, End-to-End tests are the slowest and take the most time to set up and run. Here are a few examples of End-to-End testing frameworks available on the market: WebDriver, Jest, Protractor, and Cypress.
段落 5: 中文翻译
端到端测试的一个现实示例是，如果一家笔记本电脑制造商允许员工打开一些从生产线上出来的笔记本电脑，打开它们，然后像普通用户一样使用它们，以确保整个最终产品的行为与预期相符。更具体地说，针对Web开发，端到端测试试图模拟用户可能如何与你的应用程序交互。这意味着在端到端测试中，你需要在浏览器中打开你的Web应用程序，然后通过与页面交互的方式来测试它，就像用户可能与之交互一样。例如，点击登录按钮或通过添加物品到购物车的过程。换句话说，你是从最终用户的角度测试整个完成的软件产品。现在有一些你可能会觉得有趣的事情：测试应用程序的人不一定是开发者。最后，端到端测试是最慢的，设置和运行需要最多的时间。以下是市场上可用的一些端到端测试框架的示例：==WebDriver，Jest，Protractor 和 Cypress==。

段落 6: 英文原文
Next, I'll discuss integration testing. Integration testing is testing how parts of your system interact with other parts of your system. In other words, it's testing how separate parts of your apps work together. Let's explore two examples of integration testing software: React Testing Library and Enzyme. Integration tests are faster and cheaper than End-to-End tests but not as fast or as cheap as unit testing.
段落 6: 中文翻译
接下来，我将讨论集成测试。集成测试是测试你的系统的各个部分如何与系统的其他部分互动。换句话说，它测试了你的应用程序的不同部分如何协同工作。让我们探讨两个集成

测试软件的示例：==React Testing Library 和 Enzyme==。集成测试比端到端测试更快，成本更低，但不如单元测试快速或便宜。

段落 7: 英文原文
What is ==unit testing==? Let's have a look. ==Unit testing is the process of testing the smallest units of your source code in isolation==. A good example of this is functions. A unit is the smallest piece of code that you can test separately from the rest of the app. Practically, the smallest unit of testable code in JavaScript is usually a function or a method. Unit tests are self-contained. They're meant to test code in isolation, preferably separate from the rest of your app. This makes unit tests fast to run and easy to write. So That was a brief overview of the three different kinds of tests. Together, they are sometimes represented as a three-level testing pyramid. First at the base of the Pyramid are the unit tests which have the highest speed and the lowest cost. Then in the center of the pyramid are the integration tests of average speed and expense. And finally at the top of the pyramid are the End-to-End tests, the slowest and most expensive tests to run. You are now familiar with the three most common ways that you can test your applications.
段落 7: 中文翻译
什么是单元测试？让我们来看看。单元测试是在隔离状态下测试源代码的最小单元的过程。一个很好的例子是函数。单元是你可以单独测试的代码的最小部分，与应用程序的其余部分分开。在实际操作中，JavaScript中可测试的代码的最小单位通常是一个函数或方法。单元测试是自包含的。它们旨在在隔离状态下测试代码，最好与应用程序的其余部分分开。这使得单元测试运行快速且易于编写。所以这是对三种不同测试方式的简要概述。它们有时被表示为一个三级测试金字塔。金字塔的底部是具有最高速度和最低成本的单元测试。然后，在金字塔的中心是平均速度和成本的集成测试。最后，在金字塔的顶部是端到端测试，运行速度最慢，成本最高。你现在已经了解了测试应用程序的三种最常见方式。[已完成]