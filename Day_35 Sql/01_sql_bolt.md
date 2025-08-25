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
SELECT DISTINCT director FROM movies ORDER BY director;

```

