# Exercise 1

- Find the title of each film

```sql
SELECT title  FROM Movies;
```

- Find the director of each film

```sql
SELECT director FROM Movies;
```

- Find the title and director of each film

```sql
SELECT title, director FROM Movies;
```

- Find the title and year of each film

```sql
SELECT title, year 
FROM Movies;
```

- Find all the information about each film

```sql
SELECT *
 FROM Movies;
```

# Exercise 2

- Find the movie with a row id of 6

```sql
SELECT  title
 FROM movies 
 where id=6;
```

- Find the movies released in the years between 2000 and 2010
```sql
SELECT  title 
 FROM movies
  WHERE year 
   BETWEEN 2000 and 2010 ;
```
- Find the movies not released in the years between 2000 and 2010

```sql
SELECT  title 
FROM movies 
WHERE year 
NOT BETWEEN 2000
 and 2010 ;
```
- Find the first 5 Pixar movies and their release year
```sql
SELECT  title 
FROM movies
 WHERE id
  BETWEEN 1 
   and 5 ;
```


# Exercise 3
- Find all the Toy Story movies
```sql
SELECT * 
FROM movies
 WHERE title
  like 'Toy Story%'
```
- Find all the movies directed by John Lassete
```sql
SELECT * 
FROM movies
 WHERE director 
 like 'John Lasseter' ;
```
- Find all the movies (and director) not directed by John Lassete
```sql
SELECT * 
FROM movies
 WHERE director
  NOT like 'John Lasseter' ;
```
- Find all the WALL-* movies
```sql
SELECT * 
FROM movies 
WHERE title 
 like 'WALL-_' ;
```

# Exercise 4

- List all directors of Pixar movies (alphabetically), without duplicates
```sql
SELECT 
DISTINCT 
director 
FROM movies 
ORDER BY director;
```
- List the last four Pixar movies released (ordered from most recent to least) 
```sql
SELECT * 
FROM movies
 ORDER BY year 
 DESC limit 4;
```
- List the first five Pixar movies sorted alphabetically
```sql
SELECT *
 FROM movies 
 ORDER BY title 
 ASC LIMIT 5;
```
- List the next five Pixar movies sorted alphabetically
```sql
SELECT * 
FROM movies 
ORDER BY 
title ASC LIMIT 5
  OFFSET 5;
```


# Review 1 — Tasks
- List all the Canadian cities and their populations
```sql
SELECT city,
population 
FROM north_american_cities 
WHERE country
 LIKe 'Canada';
```
- Order all the cities in the United States by their latitude from north to south
```sql
SELECT *    
 FROM north_american_cities 
 WHERE country 
 LIKE 'United States'
ORDER BY latitude DESC;
```
- List all the cities west of Chicago, ordered from west to east
```sql
SELECT * 
FROM north_american_cities
WHERE longitude < 
(SELECT longitude
 FROM  north_american_cities 
WHERE city = 'Chicago') 
Order by longitude
```
- List the two largest cities in Mexico (by population) 
```sql
SELECT *
 FROM north_american_cities 
 where country ='Mexico' 
 ORDER BY population 
 DESC limit 2;
```
- List the third and fourth largest cities (by population) in the United States and their population 
```sql
SELECT * 
FROM north_american_cities
 where country = 'United States' 
 ORDER BY population
  DESC limit 2 offset 2 ;

```
