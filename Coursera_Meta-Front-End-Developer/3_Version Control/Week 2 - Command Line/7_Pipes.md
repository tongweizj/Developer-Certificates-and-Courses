## 字幕
I have launched my terminal 

and I'm running the ls command. 

It informs me that I have 

two folders, archive and projects. 

Next, I can change directory into archive using 

the cd command and search inside using ls. 

This reveals a submissions folder. 

I can then type the cd submissions command to 

enter into the submissions folder 

and check what's inside. 

The ls command reveals two files 

: File1.txt and file2.txt. 

Each of these files have some content in them. 

I can check the content of a file 

by running another command called cat. 

I run the command cat file1.txt. 

This returns the contents of the file, 

which is some simple text. 

Another command is the word count command, 

which is abbreviated as WC. 

To use this command, 

I can just call it against 

the file by typing wcfile1.txt-w. 

The w flag tells the WC command to return the word count. 

The output informs me that there 

are a 181 words in the file. 

Let's run another example with pipes. 

Pipes allow you to pass the output 

from one command as the input to another. 

I can perform an ls command on the current directory. 

Note that this outputs to file names. 

Let's type the ls command again. 

Then I pass in my pipe using the vertical line character. 

Then I use the WC command with the dash W flag. 

Notice that it returns a result of 

two because there's two files in the system. 

What if I want to find 

the word count of a file using pipes? 

I just changed the ls command to cat file1.txt pipe wc-w. 

This returns a word count of a 181 for file1.txt. 

Did you know that you can also combine this command 

against the directory or multiple files? 

For example, I can use the command to get 

a combined word count for file 1 and file 2. 

To get this data, I just input 

the command cat file1.txt, 

and then also pass in file2.txt. 

Then I use a pipe followed by a wc-w. 

This returns a total word count of 362 for the two files.

## 摘要