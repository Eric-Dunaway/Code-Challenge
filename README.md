# Code Challenge

Using ES6, have a func defined as QuestionMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string ​true​, otherwise it should return the string ​false​. If there aren't any two numbers that add up to 10 in the string, then your program should return ​false​ as well.Example - if str is "arrb6???4xxbl5???eee5" then your program should return ​true​ because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.Winner will be chosen based not only on simplicity but on performance of the application. Make sure you’re using ​console.time()​ to show your timing.

## Sample Test Cases

Input:"bb6?9" Output:"false"

Input:"bcc?7??ccc?3tt1??????5" Output:"true"

## To Run Code

```node app.js```