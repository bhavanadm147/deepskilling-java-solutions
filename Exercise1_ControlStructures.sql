CREATE DATABASE BankDB;
USE BankDB;

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    Age INT,
    Balance DECIMAL(10,2),
    IsVIP BOOLEAN
);

CREATE TABLE Loan (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    InterestRate DECIMAL(5,2),
    DueDate DATE
);

INSERT INTO Customer VALUES
(101,'Akash',65,15000,0),
(102,'Riya',45,8000,0),
(103,'Rahul',70,12000,0),
(104,'Sneha',30,5000,0);

INSERT INTO Loan VALUES
(1,101,8.50,CURDATE()+INTERVAL 10 DAY),
(2,102,9.00,CURDATE()+INTERVAL 45 DAY),
(3,103,7.50,CURDATE()+INTERVAL 20 DAY),
(4,104,8.00,CURDATE()+INTERVAL 15 DAY);

SELECT * FROM Customer;
SELECT * FROM Loan;
UPDATE Loan l
JOIN Customer c ON l.CustomerID = c.CustomerID
SET l.InterestRate = l.InterestRate - 1
WHERE c.Age > 60;
SET SQL_SAFE_UPDATES = 0;
UPDATE Loan l
JOIN Customer c ON l.CustomerID = c.CustomerID
SET l.InterestRate = l.InterestRate - 1
WHERE c.Age > 60;
SELECT * FROM Loan;