There are many tags available in HTML. Here you will learn about common tags that you'll use as a developer.

## **Headings** 标题

Headings allow you to display titles and subtitles on your webpage.


```
<body>

<h1>Heading 1</h1>

<h2>Heading 2</h2>

<h3>Heading 3</h3>

<h4>Heading 4</h4>

<h5>Heading 5</h5>

<h6>Heading 6</h6>

</body>
```

The following displays in the web browser:

![Heading style displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PRNSX1WdSgqTUl9VnZoKoA_f18fed5168e54dee9538cd69c1a38de1_html_headings.png?expiry=1692835200000&hmac=Q05FexWEV0GkLjxhsDsfFClvTZeufrcqrBqtARZbfv8)

## **Paragraphs**段落

Paragraphs contain text content.

```
<p>

This paragraph

contains a lot of lines

but they are ignored.

</p>
```

<p>

   This paragraph

   contains a lot of lines

   but they are ignored.

</p>

The following displays in the web browser:
**Note** that putting content on a new line is ignored by the web browser.

## **Line Breaks** 换行

As you've learned, line breaks in the paragraph tag line are ignored by HTML. 
Instead, they must be specified using the `<br>` tag. The `<br>` tag does not need a closing tag.

```
<p>

This paragraph<br>

contains a lot of lines<br>

and they are displayed.

</p>
```


The following displays in the web browser:
![Line breaks displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/RfGHPZlBRW-xhz2ZQVVvLw_b1ea92a480e64b3a97687bd7187690e1_html_line_breaks.png?expiry=1692835200000&hmac=0iL1rt7UYE4aCmKpcIo2r3bGzZlYvKW5VQwJj8rQbRA)

## **Strong** 变粗

Strong tags can be used to indicate that a range of text has importance.

```html
<p>

No matter how much the dog barks: <strong>don't feed him chocolate</strong>.

</p>
```

The following displays in the web browser:
<p>
   No matter how much the dog barks: <strong>don't feed him chocolate</strong>.
</p>



## **Bold** 加粗
在 seo 上,没有 strong 这么强烈.

Bold tags can be used to draw the reader's attention to a range of text.
```html
<p>

The primary colors are <b>red</b>, <b>yellow</b> and <b>blue</b>.

</p>
```

The following displays in the web browser:
<p>
   The primary colors are <b>red</b>, <b>yellow</b> and <b>blue</b>.
</p>

The following displays in the web browser:

![Text with strong tag displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/nTRzPC9rQFq0czwva-BaRg_59ee4123b1d145cf88ad6e9a99049ee1_html_strong2.png?expiry=1692835200000&hmac=6YcCcyNdu0QzqopelEDZXIwJaE77N76xpQ3uvTEsmOI)

Bold tags should be used to draw attention but not to indicate that something is more important. Consider the following example:

```
The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>.
```

The following displays in the web browser:
The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>.

## **Emphasis** 强调

Emphasis tags can be used to add emphasis to text.
```html
<p>

   Wake up <em>now</em>!

</p>

```

The following displays in the web browser:
<p>

   Wake up <em>now</em>!

</p>



## **Italics** 斜体

Italics tags can be used to offset a range of text.

```html
<p>

The term <i>HTML</i> stands for HyperText Markup Language.

</p>
```


The following displays in the web browser:

![Italic text displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ql0_4hlsQXOdP-IZbOFzgg_aec5800603b747b1b9dd3438324afee1_html_italics.png?expiry=1692835200000&hmac=tT_jN1WFfKifiirCFzR6o9lIlEoyCAqdQXdc5uxceOc)

### **Emphasis vs. Italics**

By default both tags will have the same visual effect in the web browser. The only difference is the meaning.

Emphasis tags stress the text contained in them. Let's explore the following example:
```html
I <em>really</em> want ice cream.
```

The following displays in the web browser:

I <em>really</em> want ice cream.

Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language, for example:
```html
My favourite book is <i>Dracula</i>.
```

The following displays in the web browser:

My favourite book is <i>Dracula</i>.

**Screen readers** will not announce any difference if an _italics_ tag is used.

## **Lists** 列表

You can add lists to your web pages. There are two types of lists in HTML.

### 无序号
Lists can be unordered using the `<ul>` tag. List items are specified using the `<li>` tag, for example:
```html
<ul>
<li>Tea</li>
<li>Sugar</li>
<li>Milk</li>
</ul>
```

This displays in the web browser as:
<ul>
   <li>Tea</li>
   <li>Sugar</li>
   <li>Milk</li>
</ul>

### 序号
Lists can also be ordered using the `<ol>` tag. Again, list items are specified using the `<li>` tag.

```html
<ol>

<li>Rocky</li>

<li>Rocky II</li>

<li>Rocky III</li>

</ol>
```

This displays as the following in the web browser.

<ol>

   <li>Rocky</li>

   <li>Rocky II</li>

   <li>Rocky III</li>

</ol>


## **Div tags** 块

A `<div>` tag defines a content division in a HTML document. It acts as a generic container and has no effect on the content unless it is styled by CSS.

The following example shows a` <div>` element that contains a paragraph element:

```html
<div>

   <p>This is a paragraph inside a div</p>

</div>
```

This displays as the following in the web browser.

![Div displayed in browser img12](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/5OMnkkHmQNWjJ5JB5kDVDA_4407dda8486b438e8883c679f53fdae1_html_div_no_style.png?expiry=1692835200000&hmac=h0vSv_LvaAmXRvCz737QZGv7OuwtLyj8rHmntz9cics)

It can be nested inside other elements, for example:

```html
<div>
   <div>
     <p>This is a paragraph inside a div that’s inside another div</p>
   </div>
</div>
```

This displays in the web browser as:
<div>

   <div>

      <p>This is a paragraph inside a div that’s inside another div</p>

   </div>

</div>

As mentioned, the div has no impact on content unless it is styled by CSS. Let’s add a small CSS rule that styles all divs on the page.

Don't worry about the meaning of the CSS just yet, you'll explore CSS further in a later lesson. In summary, you're applying a rule that adds a border and some visual spacing to the element.

```html
<style>
  div {
    border: 1px solid black;
    padding: 2px;
  }
</style>

<div>
  <div>
    <p>This is a paragraph inside stylized divs</p>
  </div>
</div>
```

This displays in the web browser as:

![Paragraph in stylized div displayed in browser img13](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/bVdFeS21TUSXRXkttd1EVw_3cd3c9ca71214bafa65b0144efae3ee1_html_nested_div_with_style.png?expiry=1692835200000&hmac=jJp91PN6bfkBCspLtgXownyIEi8d---DwCJEKfJknxY)

Div elements are an important part of building webpages. More advanced usage of div elements will be explored in another course.

## Comments

If you want to leave a comment in the code for other developers, it can be added as:

<!-- This is a comment -->

The comment will not be displayed in the web browser.