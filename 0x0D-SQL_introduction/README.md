# General
 
 * What’s a database
    
    A database is a structured collection of data that is organized and stored in a way that allows for efficient retrieval and manipulation. It can be as simple as a single file or a complex system with mu    ltiple tables linked together.

 * What’s a relational database
    
    A relational database is a type of database that organizes data into tables, where relationships between the data are established based on common fields. It uses a relational model to represent these re    lationships, making it easier to query and maintain the data.

 * What does SQL stand for
    
    SQL stands for Structured Query Language. It is a standard programming language used for managing and manipulating relational databases.

 * What’s MySQL
    
    MySQL is an open-source relational database management system (RDBMS) that uses SQL. It is widely used for building web applications and is known for its reliability and ease of use.

 * How to create a database in MySQL
    
    ```bash
    CREATE DATABASE database_name;
    ```

 * What does DDL and DML stand for
    DDL stands for Data Definition Language, which is used for defining and managing database structures (e.g., creating tables or modifying schema).

    DML stands for Data Manipulation Language, which is used for manipulating data stored in the database (e.g., inserting, updating, or deleting records).

 * How to CREATE or ALTER a table
    
    ```bash
    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        ...
        );
    ```
 * How to SELECT data from a table

   ```bash
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
   ```


 * How to INSERT, UPDATE or DELETE data
    
    * To Insert data
    ```bash
        INSERT INTO table_name (column1, column2, ...)
        VALUES (value1, value2, ...);
    ```

 * What are subqueries

 * How to use MySQL functions

 # More Info

Comments for your SQL file:

```bash
$ cat my_script.sql
-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
SELECT id, name FROM students WHERE batch_id = 3 ORDER BY created_at DESC LIMIT 3;
$
```

# Install MySQL 8.0 on Ubuntu 20.04 LTS
```bash
$ sudo apt update
$ sudo apt install mysql-server
...
$ mysql --version
mysql  Ver 8.0.25-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))
$
```

# Connect to your MySQL server:
```bash
$ sudo mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 8.0.25-0ubuntu0.20.04.1 (Ubuntu)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
mysql> quit
Bye
$
```

# Use “container-on-demand” to run MySQL

In the container, credentials are root/root

 * Ask for container Ubuntu 20.04
 * Connect via SSH
 * OR connect via the Web terminal
 * In the container, you should start MySQL before playing with it:

```bash
$ service mysql start
 * Starting MySQL database server mysqld
$
$ cat 0-list_databases.sql | mysql -uroot -p
Database
information_schema
mysql
performance_schema
sys
$
```
