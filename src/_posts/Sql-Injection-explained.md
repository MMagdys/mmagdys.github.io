

SQL injection vulnerability allows attacker to pass "injection" of a SQL statment via the input data throught the web application. A successful SQL injection attack can read, modify or delete (Insert/Update/Delete) sensitive data from the database, execute administration operations on the database (such as shutdown the DBMS) or in some cases issue commands to the operating system.


## SQL Injection in action
Almost every web application employs a database to store the various kinds of information it needs to operate. For example, an online store might use a database to store the following information:

- user account, passwords, personal information, privillage level.
- items in the store, its description, quantity and price.
- orders, payment details.

we will demonstrate simple classical example for SQL Injection.
### Bypassing a Login

When a user clicks login, the back-end code querys for records in a user table that match the credentials that a user supplied. Many applications that implement a forms-based login function use a database to store user credentials and perform a simple SQL query to validate each login attempt.  
Here a typical SQL query example:  
assuming that i entered ``muhammad`` as username and ``secret`` as password

``SELECT * FROM users WHERE username = ‘muhammad’ AND password = ‘secret’``   

This query causes the database to check every row within the users table and extract each record where the username column has the value ***muhammad*** and the password column has the value ***secret*** . If a user's details are returned to the application, the login attempt is successful, and the application creates an authenticated session for that user.


#### Exploiting a basic vulnerability
In this situation, an attacker can inject into either the username or the password field to modify the query performed. 

##### **First Scenario**

Assuming that the attacker knows that the username of the application administrator is admin, he can log in as admin by entering ``admin'--`` as a username and any password.   
the resulted query will be 

``SELECT * FROM users WHERE username = ‘admin’-- AND password = ‘secret’``   

Note that ``--`` is used to comment the rest of the query which means the rest of the query will be ignored, so the executed query will be

``SELECT * FROM users WHERE username = ‘admin’``   

Congratulations! The password check is bypassed.  


##### **Second Scenario**

Assuming that the attacker does not know the administrator's username. In most applications, the first account in the database is an administrative user, because this account normally is created manually and then is used to generate all other accounts via the application.   
Furthermore, if the query returns the details for more than one user, most applications will simply process the first user whose details are returned. An attacker can often exploit this behavior to log in as the first user in the database by entering ``' OR 1=1 --`` username and any password   
the resulted query will be  

``SELECT * FROM users WHERE username = ‘’ OR 1=1 -- AND password = ‘secret’``   
due to the comment symbol the executed query will be   

``SELECT * FROM users WHERE username = ‘’ OR 1=1``   

which will return all the application user and log in as the first user, which is usally is the admin.   

Congratulations! The password check is bypassed.  

________________________________
*References*
- [The web application hacker's handbook](https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470)
- [OWASP, SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

