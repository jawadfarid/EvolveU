--------------------------------------------
-------------ASSESSMENT TEST 2------------
--------------------------------------------
-- SELECT * FROM cd.members;
-- SELECT * FROM cd.bookings;
-- SELECT * FROM cd.facilities;

-- SELECT name, membercost+guestcost AS cost 
-- FROM cd.facilities;

-- SELECT name, membercost 
-- FROM cd.facilities;

-- SELECT *
-- FROM cd.facilities
-- WHERE membercost >0 AND membercost< (monthlymaintenance)/50

-- SELECT name
-- FROM cd.facilities
-- WHERE name LIKE '%Tennis%';

-- SELECT facid,name
-- FROM cd.facilities
-- WHERE facid BETWEEN 1 AND 5;

-- SELECT memid,surname,firstname,joindate
-- FROM cd.members
-- WHERE extract(month from joindate) > 8;

-- SELECT DISTINCT surname
-- FROM cd.members
-- ORDER BY surname
-- LIMIT 10

-- SELECT MAX(joindate)
-- FROM cd.members

-- SELECT COUNT(*)
-- FROM cd.facilities
-- WHERE guestcost >= 10;

-- SELECT * FROM cd.bookings;

-- SELECT facid, SUM(slots)
-- FROM cd.bookings
-- WHERE extract(month from starttime) > 8
-- GROUP BY facid
-- ORDER BY SUM(slots);

-- SELECT facid, SUM(slots)
-- FROM cd.bookings
-- GROUP BY facid
-- HAVING SUM(slots) > 1000 --HAVING IS USED WHEN YOU WANT TO USE WHERE FOR AN AGGREGATE FUNCTION
-- ORDER BY SUM(slots);

-- SELECT * FROM cd.facilities

-- SELECT bookings.starttime,
-- facilities.name
-- FROM cd.bookings
-- INNER JOIN cd.facilities ON facilities.facid = bookings.facid
-- WHERE starttime BETWEEN '2012-09-21' AND '2012-09-22';
-- -- WHERE starttime = '2012-09-21 08:00:00';

-- SELECT * FROM cd.members

-- SELECT bookings.starttime,

SELECT bookings.starttime,
firstname|| ' ' || surname AS full_name
FROM cd.bookings
INNER JOIN cd.members ON members.memid = bookings.memid
WHERE  firstname = 'David' AND surname = 'Farrell'
