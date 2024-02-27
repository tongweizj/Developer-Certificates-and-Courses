```html
<table>  
  <tr>  
    <th>Person 1</th>  
    <th>Person 2</th>  
    <th>Person 3</th>  
  </tr>  
  <tr>  
    <td>Emil</td>  
    <td>Tobias</td>  
    <td>Linus</td>  
  </tr>  
  <tr>  
    <td>16</td>  
    <td>14</td>  
    <td>10</td>  
  </tr>  
</table>
```

<table>  
  <tr>  
    <th>Person 1</th>  
    <th>Person 2</th>  
    <th>Person 3</th>  
  </tr>  
  <tr>  
    <td>Emil</td>  
    <td>Tobias</td>  
    <td>Linus</td>  
  </tr>  
  <tr>  
    <td>16</td>  
    <td>14</td>  
    <td>10</td>  
  </tr>  
</table>


My website for the lemon is coming on well, but some key information is still missing. The prices. 
The best way to add information like a price list is by using an HTML table. 
You might be familiar with columns and rows in spreadsheets software. 
HTML tables look similar and allow you to neatly organize content in rows and columns. 
Websites almost always have information that needs to be organized in a way that makes it quick and easy to read. 
For example, the schedule of an event, available sizes of clothing items, or the specs of a camera. 
In this video, I will demonstrate how to create a symbol table for the prices of little lemon. 
I want to add a table with the prices to the bottom of the index.html page. 
So I already have it open. 

Still in the body elements below the anchor elements, I add the table tag. 
Inside of it I add to table row tags or tea or tags, as they're commonly referred to. 
This will create a row for each of the dishes. 
Now I need to add table data tags or td tags so that I can include the prices. 
Table data tags define the contents of table cells. 
So I need to add two of those inside each row,  one for the dish and one for its price.

  
我的柠檬网站进展顺利，但仍然缺少一些关键信息。
价格。添加价目表等信息的最佳方法是使用 HTML 表。
您可能熟悉电子表格软件中的列和行。HTML 表格看起来类似，允许您整齐地组织行和列中的内容。
网站几乎总是有需要以快速和易于阅读的方式组织的信息。
例如，活动的日程安排、服装物品的可用尺寸或相机的规格。
在本视频中，我将演示如何为小柠檬的价格创建交易品种表。
我想在索引.html页面的底部添加一个包含价格的表格。
所以我已经打开了它。仍然在锚元素下方的正文元素中，我添加了表标签。
在它里面，我添加了表格行标签或茶或标签，因为它们通常被称为。这将为每个菜肴创建一行。现在我需要添加表数据标签或 td 标签，以便我可以包含价格。表数据标记定义表单元格的内容。所以我需要在每行中添加两个，一个用于菜肴，一个用于价格。

In the first row, I type 

Falafel inside the first table data tag. 

In the second table data tag, 

I add the price, let's say $10. 

I do the same with the second row. 

I type Pasta Salad inside the first table data tag, 

and a price of $12 inside the second table data tag. 

Now I will save the file and open it in my web browser.

  
在第一行中，我在第一个表数据标记中键入沙拉三明治。在第二个表数据标签中，我添加了价格，假设为 10 美元。我对第二行做同样的事情。我在第一个表数据标签中键入意大利面沙拉，在第二个表数据标签中键入 12 美元的价格。现在我将保存文件并在我的 Web 浏览器中打开它。



Great. The prices display at the bottom of the webpage. 

However, the table is not 

displayed like a regular table at the moment, 

but I will style it soon. 

To make it more clear for my users, 

I'm going to add headers to the columns now. 

To do this, I add a new row to 

the top of the table with the table row tag.

  
伟大。价格显示在网页底部。但是，该表目前不像常规表那样显示，但我很快就会设置它样式。为了让我的用户更清楚，我现在将向列添加标题。为此，我在表顶部添加了一行带有表行标记的新行。


Then use the table header tag or 

th tag for the heading cells. 

I need to add two table header tags. 

I type dish in the first column heading, 

and price in the second heading. 

I save the HTML and refresh it 

again to check the update in the browser.

  
然后对标题单元格使用表格标题标签或 th 标签。我需要添加两个表头标签。我在第一列标题中输入菜，在第二列标题中输入价格。我保存了 HTML 并再次刷新它以检查浏览器中的更新。



The information that's presented much 

clearer now that the columns have headings, 

but it is not displayed like a table, yet. 

I will add a bit of CSS to 

improve the styling of the table. 

Don't worry about the details just yet. 

But I would like to add a little bit of magic 

now to get you excited about styling. 

I will add a style tag. 

I will add a one pixel border to the table.

  
现在显示的信息更加清晰，因为列有标题，但它还没有像表格一样显示。我将添加一些 CSS 来改进表格的样式。暂时不要担心细节。但我现在想添加一点魔力，让你对造型感到兴奋。我将添加一个样式标签。我将在表格中添加一个像素边框。



Let's save the file again and open it in the browser.  
让我们再次保存文件并在浏览器中打开它。



Now the table has a border around all the cells. 

This is just a quick method of styling a table. 

Later you will learn how to do this 

using best practices with CSS. 

Congratulations. You now know how to 

add tables to HTML files. 

I use tables extensively and I am sure you will too.

  
现在，表格的所有单元格周围都有一个边框。这只是设置表样式的快速方法。稍后，您将学习如何使用 CSS 的最佳实践来执行此操作。祝贺。您现在知道如何向 HTML 文件添加表。我广泛使用表格，我相信你也会。