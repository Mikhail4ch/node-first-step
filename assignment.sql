
// tables creation and insertion

CREATE TABLE users (
id integer NOT NULL,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
firstName text NOT NULL,
lastName text NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO users(id, username, password, email, firstName, lastName)
VALUES (1, 'Goose', 1234, 'coolgoose@gmail.com', 'John', 'Cena' );

INSERT INTO users(id, username, password, email, firstName, lastName)
VALUES (2, 'capybara', 4321, 'coolcapybara@gmail.com', 'Ryan', 'Gosling' );

CREATE TABLE countries (
id integer NOT null,
name VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO countries(id,name) VALUES(1, 'Norway');
INSERT INTO countries(id,name) VALUES(2, 'Sweden');
INSERT INTO countries(id,name) VALUES(3, 'Finland');

CREATE TABLE addresses (
id integer NOT NULL,
user_id I integer NOT NULL,
country_id integer NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (country_id) REFERENCES countries(id)
); 

INSERT INTO addresses(id, user_id, country_id) VALUES(1, 1, 1);
INSERT INTO addresses(id, user_id, country_id) VALUES(2, 2, 1);
INSERT INTO addresses(id, user_id, country_id) VALUES(3, 2, 3);

// queries 

SELECT * FROM countries;

SELECT email FROM users;

SELECT firstName FROM users WHERE firstName LIKE '%e%';

SELECT countries.name, users.firstName, users.lastName FROM countries
JOIN addresses ON addresses.country_id = countries.id
WHERE addresses.user_id = 2
JOIN users ON users.id = addresses.user_id


