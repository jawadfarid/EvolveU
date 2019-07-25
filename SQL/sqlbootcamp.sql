-- SELECT first_name,last_name,email 
-- FROM customer;
-- select *from customer;

-- SELECT DISTINCT rating 
-- FROM film;

-- SELECT *
-- FROM customer 
-- WHERE store_id = 1 AND address_id > 5 ;
-- AND last_name='Rice';

-- SELECT email
-- FROM customer 
-- WHERE first_name = 'Nancy' AND last_name = 'Thomas';

-- SELECT title,description
-- FROM film
-- WHERE title = 'Outlaw Hanky';

---------------------------------------------
------------------WHERE---------------------
---------------------------------------------
-- SELECT phone
-- FROM address
-- WHERE address = '259 Ipoh Drive';

---------------------------------------------
---------------------COUNT-------------------
---------------------------------------------
-- SELECT COUNT(DISTINCT (amount)) 
-- FROM payment;


---------------------------------------------
---------------------LIMIT-------------------
---------------------------------------------

-- SELECT * 
-- FROM customer
-- LIMIT 5;



---------------------------------------------
---------------------ORDER BY-------------------
---------------------------------------------
-- SELECT first_name
-- FROM customer
-- ORDER BY last_name;
--This is allowed in PostgrSQL MOST OF THE other SQL Databases such as Oracle MySQL may not allow you to do it
--Most standard SQL queries will only allow you to sort rows based on the columns that appear in the SELECT clause
--PostgreSQL has the ability to sort results based on the columns that do not appearint he election list
-- Other SQL enginer may not allow you to do that

-- SELECT customer_id,amount
-- FROM payment
-- ORDER BY amount DESC
-- LIMIT 10;

-- SELECT title, film_id
-- FROM film
-- WHERE film_id >= 1 AND film_id <= 5;

-- 
-- OR
-- 

-- SELECT title, film_id
-- FROM film
-- ORDER BY film_id
-- LIMIT 5;



---------------------------------------------
---------------------BETWEEN-------------------
---------------------------------------------
-- SELECT  customer_id, amount 
-- FROM payment
-- WHERE amount BETWEEN 8 AND 9;

-- SELECT  customer_id, amount 
-- FROM payment
-- WHERE amount NOT BETWEEN 8 AND 9;

-- SELECT  amount,payment_date
-- FROM payment
-- WHERE payment_date BETWEEN '2007-02-07' AND '2007-02-15';

---------------------------------------------
----------------------IN---------------------
---------------------------------------------
-- SELECT customer_id,rental_id,return_date 
-- FROM rental
-- WHERE customer_id IN(7,13,10)
-- ORDER BY return_date DESC;

-- SELECT *
-- FROM payment
-- WHERE amount IN(7.99,8.99);


--------------------------------------------
---------------------LIKE-------------------
--------------------------------------------
-- SELECT first_name, last_name
-- FROM customer
-- WHERE first_name LIKE 'er%';
-- last_name LIKE 'er%';

-- SELECT first_name, last_name
-- FROM customer
-- WHERE first_name LIKE '_er%';

-- SELECT first_name, last_name
-- FROM customer
-- WHERE first_name NOT LIKE 'Jen%';

-- SELECT first_name, last_name
-- FROM customer
-- WHERE first_name ILIKE 'BaR%'; --no case sensitivity



--------------------------------------------
-------------GENERAL CHALLENEGE-------------
--------------------------------------------
-- SELECT COUNT(amount)
-- FROM payment
-- WHERE amount > 5;

-- SELECT COUNT(first_name)
-- FROM actor
-- WHERE first_name ILIKE 'P%';

-- SELECT COUNT(DISTINCT(district))
-- FROM address;

-- SELECT COUNT(*)
-- FROM film
-- WHERE rating = 'R'AND
-- replacement_cost BETWEEN 5 AND 15;

-- SELECT title
-- FROM film
-- WHERE title ILIKE '%TRUMAN%';


--------------------------------------------
---------------MIN MAX AVG SUM-------------
--------------------------------------------
-- SELECT  ROUND(AVG(amount),2)
-- FROM payment;

-- SELECT  ROUND(MIN(amount),2)
-- FROM payment;

-- SELECT  MAX(amount)
-- FROM payment;

-- SELECT  SUM(amount)
-- FROM payment;

--------------------------------------------
-----------------GROUP BY----------------
--------------------------------------------
-- SELECT customer_id
-- FROM payment
-- GROUP BY customer_id

-- SELECT customer_id, SUM(amount)
-- FROM payment
-- GROUP BY customer_id;

-- SELECT customer_id, SUM(amount)
-- FROM payment
-- GROUP BY customer_id
-- ORDER BY SUM(amount) DESC;

-- SELECT staff_id, COUNT(*)
-- FROM payment
-- GROUP BY staff_id;

-- SELECT rating, COUNT(*)
-- FROM film
-- GROUP BY rating

-- SELECT rental_duration, COUNT(rental_duration)
-- FROM film
-- GROUP BY rental_duration

-- SELECT rating, AVG(rental_rate)
-- FROM film
-- GROUP BY rating;

-- SELECT staff_id, COUNT(amount),SUM(amount)
-- FROM payment
-- GROUP BY staff_id;

-- SELECT rating, ROUND(AVG(replacement_cost),2)
-- FROM film
-- GROUP BY rating;

-- SELECT customer_id, SUM(amount)
-- FROM payment
-- GROUP BY customer_id
-- ORDER BY SUM(amount) DESC
-- LIMIT 5;


--------------------------------------------
-------------------HAVING-----------------
--------------------------------------------
-- SELECT customer_id, SUM(amount) 
-- FROM payment
-- GROUP bY customer_id
-- HAVING SUM(amount) > 200;

-- SELECT store_id, COUNT(customer_id) 
-- FROM customer
-- GROUP bY store_id
-- HAVING COUNT(customer_id) > 300

-- SELECT rating, AVG(rental_rate)
-- FROM film
-- WHERE rating IN ('R','G','PG')
-- GROUP BY rating
-- HAVING AVG(rental_rate) < 3;

--------------------------------------------
-------------------CHALLENEGE---------------
--------------------------------------------
-- SELECT customer_id, COUNT(*)
-- FROM payment
-- GROUP BY customer_id
-- HAVING COUNT(*) >= 40;


-- SELECT rating, ROUND(AVG(rental_duration),2)
-- FROM film
-- GROUP BY rating
-- HAVING AVG(rental_duration) > 5;

--------------------------------------------
-------------ASSESSMENT TEST 1------------
--------------------------------------------

-- SELECT staff_id,customer_id,SUM(amount)
-- FROM payment
-- GROUP BY customer_id,staff_id
-- HAVING SUM(amount) >=110 AND staff_id =2;

-- SELECT COUNT(title)
-- from film
-- WHERE title ILIKE 'J%';

-- SELECT customer_id,first_name, last_name, address_id
-- FROM customer
-- WHERE first_name ILIKE 'E%'AND address_id < 500
-- ORDER BY customer_id DESC;

--------------------------------------------
----------------------AS--------------------
--------------------------------------------
-- SELECT payment_id AS my_payment_id
-- FROM payment;

-- SELECT customer_id, SUM(amount) AS Total_amount_spent
-- FROM payment
-- group by customer_id


--------------------------------------------
----------------------INNER JOIN--------------------
--------------------------------------------
-- SELECT * FROM customer;
-- SELECT * FROM payment;

-- SELECT customer.customer_id, 
-- customer.first_name, 
-- customer.last_name,
-- email,
-- amount,
-- payment_date
-- FROM customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id
-- ORDER BY customer.customer_id;

-- SELECT customer.customer_id, 
-- customer.first_name, 
-- customer.last_name,
-- email,
-- amount,
-- payment_date
-- FROM customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id
-- WHERE customer.customer_id = 2;

-- SELECT customer.customer_id, 
-- customer.first_name, 
-- customer.last_name,
-- email,
-- amount,
-- payment_date
-- FROM customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id
-- WHERE customer.first_name LIKE 'A%';

-- SELECT * FROM staff
-- LIMIT 5;

-- SELECT payment.payment_id,
-- payment.amount,
-- staff.staff_id, 
-- staff.first_name, 
-- staff.last_name,
-- staff.email
-- FROM staff
-- INNER JOIN payment ON payment.staff_id = staff.staff_id;

-- SELECT * FROM inventory
-- LIMIT 5;

-- SELECT * FROM film
-- LIMIT 5;

-- SELECT COUNT(film.film_id) AS copies_at_store_1,
-- film.title
-- FROM inventory
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE store_id = 1
-- GROUP BY film.title
-- ORDER BY film.title;

-- SELECT * FROM film
-- LIMIT 2;

-- SELECT * FROM language
-- LIMIT 2;

-- SELECT
-- film.title,
-- language.name AS language
-- FROM film
-- INNER JOIN language ON language.language_id = film.language_id

-- SELECT
-- title,
-- name AS language
-- FROM film
-- JOIN language AS lan ON lan.language_id = film.language_id;

-----------------------------
-- OR ANOTHER WAY OF DOING---
-----------------------------
-- SELECT
-- title,
-- name movie_language
-- FROM language lan
-- JOIN film ON lan.language_id = film.language_id;

-- SELECT * FROM city;
-- SELECT * FROM country;

-- SELECT city.city_id,
-- city.city,
-- country.country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;

-- SELECT * FROM address
-- LIMIT 5

-- SELECT city.city_id,
-- address.address,
-- address.district,
-- city.city,
-- address.postal_code,
-- address.phone
-- FROM city
-- JOIN address ON city.city_id = address.city_id;


-- SELECT * FROM staff
-- LIMIT 5

-- SELECT staff.staff_id,
-- staff.first_name,
-- staff.last_name,
-- address.address,
-- staff.email
-- FROM address
-- JOIN staff ON address.address_id = staff.address_id;

--------------------------------------------
--------------LEFT OUTER JOIN--------------
--------------------------------------------
-- SELECT film.film_id,film.title, inventory.inventory_id
-- FROM film
-- LEFT JOIN inventory ON
-- film.film_id = inventory.film_id;

-- SELECT inventory.inventory_id, COUNT(*)
-- FROM film
-- LEFT JOIN inventory ON
-- film.film_id = inventory.film_id
-- WHERE inventory.inventory_id is null
-- -- ORDER BY film_id;
-- GROUP BY inventory.inventory_id


--------------------------------------------
--------------TIMESTAMP--------------
--------------------------------------------
-- SELECT customer_id, extract(day from payment_date) AS day, payment_date FROM payment;

-- SELECT SUM(amount), extract(month from payment_date) AS Month FROM payment
-- GROUP BY Month
-- -- ORDER BY Month
-- ORDER BY SUM(amount) DESC

-------------------------------------------------------
--------------MATHEMATICAL OPERATORS AND FUNCTIONS-----
-------------------------------------------------------
-- SELECT * FROM payment

-- SELECT customer_id + rental_id AS new_id
-- FROM payment

-- SELECT customer_id / rental_id AS new_id
-- FROM payment

-- SELECT rental_id/customer_id AS new_id
-- FROM payment

-- SELECT ROUND(AVG(amount),2)
-- FROM payment;

-------------------------------------------------------
--------------STRING FUNCTIONS-----------------
-------------------------------------------------------
-- SELECT * FROM customer;

-- CONCATENATING STRINGS(CHAR) TOGATHER
-- SELECT first_name || ' ' || last_name
-- FROM customer;

-- SELECT first_name, char_length(first_name)
-- FROM customer;

-- SELECT lower(first_name)
-- FROM customer;

-------------------------------------------------------
--------------SUBQUERY-----------------
-------------------------------------------------------

-- SELECT ROUND(AVG(rental_rate),2)
-- FROM film

-- SELECT rental_rate, title
-- FROM film
-- WHERE rental_rate > 2.98;

------------------
-------OR---------
------------------

-- SELECT film_id, rental_rate, title
-- FROM film
-- WHERE rental_rate > (SELECT ROUND(AVG(rental_rate),2) FROM film);

-- SELECT * FROM inventory;

-- SELECT film_id,title
-- FROM film
-- WHERE film_id IN

-- (SELECT inventory.film_id
-- FROM rental
-- JOIN inventory ON
-- inventory.inventory_id = rental.inventory_id
-- WHERE rental.return_date BETWEEN '2005-05-29' AND '2005-05-30');


-------------------------------------------------------
--------------SELF JOIN-----------------
-------------------------------------------------------
-- SELECT a.customer_id,a.first_name,a.last_name,b.customer_id,b.first_name,b.last_name 
-- FROM customer AS a, customer AS b
-- WHERE a.first_name = b.last_name;

------------------
-------OR---------
------------------

-- SELECT a.customer_id,a.first_name,a.last_name,b.customer_id,b.first_name,b.last_name 
-- FROM customer AS a
-- JOIN customer AS b
-- ON a.first_name = b.last_name;


