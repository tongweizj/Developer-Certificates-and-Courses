## Introduction to Internet Protocols
Email is a common communication method that we all know about. 
==But before existed the alternative was to send mail to one another through== 
==the postal system.== 
电子邮件是我们都知道的一种常见的通信方式。但在存在之前，另一种选择是通过邮政系统相互发送邮件。

There is a surprising **parallel** between the postal system and how the computer sends and receives data across the internet every day. 
邮政系统与计算机每天通过互联网发送和接收数据的方式之间有一个令人惊讶的相似之处。

Let's compare how they both work. 
让我们比较一下它们是如何工作的。

Data sent across the internet is quite an important part of our everyday lives and it wouldn't be possible without Internet Protocol addresses or IP addresses. 
通过互联网发送的数据是我们日常生活中非常重要的一部分，如果没有互联网协议地址或IP地址，这是不可能的。

A useful way to think of IP addresses is that they function much like  addresses in a postal system that make it possible for packets of information to be delivered to you. 
考虑 IP 地址的一种有用方法是，它们的功能与邮政系统中的地址非常相似，使信息包可以传递给您。

And like with the postal system things can go wrong. 
But let's first go over how things work. 
就像邮政系统一样，事情可能会出错。但是，让我们首先回顾一下事情是如何运作的。

Before we think about how they can go wrong in this video you will learn what IP addresses are and explore how computers send data across the internet. 
在我们考虑它们如何在本视频中出错之前，您将了解什么是 IP 地址并探索计算机如何通过互联网发送数据。

You probably learned how computers connect to each other to form networks and how these networks connect to each other to form the internet. 
您可能了解了计算机如何相互连接以形成网络，以及这些网络如何相互连接以形成互联网。

When you send data between computers across the internet, a common way of understanding that data is needed by the computers and networks that the data travels across. 
当您通过 Internet 在计算机之间发送数据时，这是了解数据传输的计算机和网络需要数据的常用方法。

What makes that possible is the ==Internet Protocol==. 
使这成为可能的是互联网协议。

==Version four and version six== are currently the two most widely used standards of internet protocol. 
版本四和版本六是目前使用最广泛的两个互联网协议标准。

Think of the old fashioned postal system again when you send a letter to a friend you need their address otherwise they won't receive your letter. 
当你给朋友寄信时，再想想老式的邮政系统，你需要他们的地址，否则他们不会收到你的信。

Computers work in a similar way. ==Every computer on a network is assigned an IP address==. 
计算机以类似的方式工作。网络上的每台计算机都分配有一个 IP 地址。

In protocol version four an IP address contains four octet. It's separated by periods or dots. 
For example 192.0.2.235. 
在协议版本 4 中，IP 地址包含四个八位字节。它由句点或点分隔。例如 192.0.2.235。

In protocol version six. An IP address contains eight groups of hexadecimal digits separated by a colon. For example 4527:0a00:1567:0200:ff00:0042:8329.
在协议版本六中。 IP 地址包含八组十六进制数字，用冒号分隔。例如 4527：0a00：1567：0200：ff00：0042：8329。

When you send data across a network, you send the data as ==a series of messages called IP packets==. 通过网络发送数据时，数据作为一系列称为 IP 数据包的消息发送。
Also known as data **grams** at a high level IP packets contain ==a header and a payload== or the data. 也称为高级数据报 IP 数据包包含标头和有效负载或数据。

Think of that old fashioned postal system again, when you send a letter. You not only include the recipient's address but also your own address in case a return location is needed. 
再想想那个老式的邮政系统，当你寄一封信时。您不仅要包括收件人的地址，还要包括您自己的地址，以防需要退货地点。

IP packets are the same. They include the ==destination IP address and source IP address==. 
These addresses are in the header along with some additional information to help deliver the packet. IP 数据包是相同的。它们包括目标 IP 地址和源 IP 地址。这些地址与一些其他信息一起位于标头中，以帮助传递数据包。

And the payload contains the data of the packet and some of the other protocols which will cover in a moment. 有效载荷包含数据包的数据和其他一些协议，这些协议稍后将涵盖。

Earlier I mentioned that things can go wrong with the postal system. 
When sending multiple letters to a friend it's possible they may arrive out of order. 
早些时候我提到邮政系统可能会出现问题。向朋友发送多封信时，它们可能会乱序到达。

It's possible that a package will get damaged or if you're really unlucky a letter could get lost. 
包裹可能会损坏，或者如果您真的很不幸，一封信可能会丢失。

These issues can happen to IP packets too they can **arrive out of order**, become damaged or corrupted to in transit or be dropped or lost during transit. To solve these problems, the payload part of the packets contains other protocols too. 
这些问题也可能发生在 IP 数据包上，它们可能会无序到达，在传输过程中损坏或损坏，或者在传输过程中丢失或丢失。为了解决这些问题，数据包的有效载荷部分也包含其他协议。

You can think of them as another message inside the payload of the IP packet. 您可以将它们视为 IP 数据包有效负载中的另一条消息。

The two most common protocols are the Transmission Control Protocol referred to as TCP and the User Datagram Protocol, also known as UDP. 两种最常见的协议是称为TCP的传输控制协议和用户数据报协议，也称为UDP。

TCP can solve all three of the previously mentioned issues but at the cost of a small delay when sending the data. This protocol is used for sending the data that must arrive correctly and in order such as a text or image files. TCP可以解决前面提到的所有三个问题，但代价是发送数据时会有很小的延迟。此协议用于发送必须正确和按顺序到达的数据，例如文本或图像文件。

UDP solves the corrupt packet issue but packets can still arrive out of order or not arrive at all. This protocol is used for sending data that can tolerate some data loss such as voice calls or live video streaming. UDP 解决了损坏的数据包问题，但数据包仍可能无序到达或根本无法到达。 此协议用于发送可以容忍某些数据丢失的数据，例如语音呼叫或实时视频流。

Both of these protocols contain payloads that contain further protocols inside of them and there you have it. The internet uses internet protocols much like an old fashioned postal system. 
These protocols can help to make sure that data arrives in order does not become corrupted or lost or dropped during transit. 这两个协议都包含有效负载，这些有效负载包含其中的更多协议，并且您拥有它。互联网使用互联网协议，就像老式的邮政系统一样。这些协议可以帮助确保到达的数据在传输过程中不会损坏、丢失或丢弃。

Now you're able to explain how IP addresses work and how computers send data across the internet.现在，您可以解释 IP 地址的工作原理以及计算机如何通过互联网发送数据。
