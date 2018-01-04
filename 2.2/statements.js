// We can have as many statements in the code as we want. Another statement can be separated with a semicolon.

alert('Hello'); alert('World');

//Usually each statement is written on a separate line – thus the code becomes more readable:

alert('Hello');
alert('World');

//In most cases a newline implies a semicolon. But “in most cases” does not mean “always”! There are cases when a newline does not mean a semicolon, for example:
alert(3 +
    1
    + 2);
//The code outputs 6, because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, no semicolon required. And in this case that works as intended.

//But there are situations where JavaScript “fails” to assume a semicolon where it is really needed. Errors which occur in such cases are quite hard to find and fix.
