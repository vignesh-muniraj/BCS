# Day 1 - Intro


### Day_17 
# Advance js



## intro to browser

### what language does the browser understand

> Note : chrome is built on c++
> 1.HTML
> 2.css
> 3.js

## multiple types of Engine

- Rendering Engine
  - Parse HTML + CSS
  - Chrome: Blink
- Js Engine
  - parses JavaScript
  - Chrome: V8

## Shortcuts

- alt + up/down ⬆️⬇️
  emoji windows + .

## Usecase For markdown

- AI(chargpt)
- Notes
- Blog
- Slides
- Docs

```Js
console.log("Hello, world")
```

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

# convert html,css,js to reacct js

webpack+Babel

### Day_02

# CDN

# Port

22,80,443
every website runs on 443 port

# TCP

> to avoid file transfer and conect right person.

- Acknowledgement
- web browsing
- Email
- 3 way handshake

# UDP

- live stream
- Online games
- no handshake

# OFC (optical fiber cable)

# IP packets

# HTTP timeline

- 1996 1.0 version
-      1.1
-      1.1
-      1.2

## Assignment

    http 2 vs http 3.

### HTTP codes

- 400 client mistake
- 500 server
- 300 redirection

### HTTP methods

- get
- post
- put
- delete

## Types of engine+

    - Rendering Engine
    - JS Engine


    HTML ---> HTML Parser ----> DOM
                           --
    JS    ---> JS engine --
                           --
    CSS   ---> CSS parser ---> CSSOM

### JS

- Dynamically typed language.

- variables

  ## Datatypes

  ### Primitive Datatypes

  1.number
  2.string
  3.boolean
  4.undefined

### Day 03

- DNS propecation.

## templetlitral

## Arthimetic operators

# + - / %

## relational operators (gives boolean ans)

- < > != == <= >=

## Logical (gives boolean ans)

- && ||

## prompt

## confirm

## string methods

- toLowerCase()
- toUpperCase()
- trim()
- padstart(),padend()

## property

- length

## undefined vs defined

- var x; is an undefined ,declared but not assinged any value.(undefined)
- console.log(y) ,is not decalred so defined.(defined)

## Array

- Group of same data types.

## Object

- group of different data types.
- key - value pairs.

### Day 05

# Array

- index & values.

# object

- key & value

## ES6

- Numeric_seperators

## types of declartions

- var ,let ,const

- var
- we can redeclare a same varible name.
- var name = "app";
- var name = "app";

- let
- cannot redeclare a same variable name.
  let name = "app";
  let name = "app"; (error)
- const

  - cannot reassign and Redeclare.

  ### ..spread operator

  - const x = [100,23,45];
    -const y=[...x] // copy by value

## Array destructuring

- const [t1, t2] = [100,200];
- const [t1, t2=80] = [100,200,300]; when t2 is undefined then it takes default value
- const [t1, t2] = [100,200];

## object destructuring

## Day 01

## carbon.now.sh

## slidev

##

## compose and pipe

## Day 09

### methods
- push vs unshift.
- some(||) vs every(&&)
 - every 
 ```js
 arr.every((n)=> if(n>15){consloe.og("cool");
  })
  ```

        
 ### Presentation
# Improvement Part.
  - text font size.
  - you should Know ,what to speak next.
  - Asking question on correct time.
  - output sholud be Clear size.

  #  Good
  - Goot ppt style.
  - Example Gif images.
  - Color pelete.
  - Adding only 2 points.

  ### conbon board
  # SCRUM (Agile)
  - sprint - 14 days.
  - SprintPlanning - 1st day
        - Discussing what to do 14-days.
        - assigning storypoint(1,2,3,5,8,13);
  - tickets.
  - priority,
  - Sprint Backlog, Todo, In Progress, Code Review.
  - Burn down chart (Dashboard).
     


### Sort
 - +ve -> swap
 - -ve & 0 -> same 
 - a-b (ass)
 - b-a (des)

 ## predicates

 ## find()
 - returns the first finded element;

#### Day 12 
# Text styling - ii
  - text-transform
  - text-align
  - text-decoration
  - letter spacing
  - line height


  # sans serif
  - fun ,trend
  - new

  # serif
  - series guys
  - trusted
  - traditional
  ## Box model
  - conten
  - padding
  - border
  - padding
   

# defalut padding
- list

# Day 13
- css - casecading - overriding
# Day_14
 # combinators
- child selector. div>p
- Descendant Selector. div p
- General Sibiling Selector. h1~p (h1 sister,brother)(after h1,only Younger sibilings)
- Adjacent Sibling. p+p (near p), h1+p (near h1)

# ---
# imperative 
- How to do. (children)
# Declarative
- what to do.


# selectors
#     <!-- !important  > Inline > ID > ( class > Element ) Inhertiated properties ==> use these-->

# Not Inherited
- border
- margin
- height
- width
- background 



# Pseudo class
- :hover
- :nth-child(2);
- li:first-child();
- li:first-Of-type()

# Pseudo element
- ::after
- ::before
- li::before{
  content :"✔ ";
}

- li::before{
  content :"✔ ";

}

# Semantic Elements 
# EXample
    <header></header>
    <footer></footer>
    1.DX
    2.SEO
    3.Accessibility

  # object-fit: cover;

  ## DAY 16
    
# overflow: hidden;
- hidden
- scroll
- auto (which side want to scroll)


# Grid
- grid-template-columns: 1fr 1fr;
- grid-template-columns: repeat(10, 1fr);
- grid-template-columns: repeat(10, 1fr);
- grid-template-columns: 4fr repeat(2, 1fr);
- grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

# Ram technic
-Repeat Autofit MinMax.


# positon
- top - 50%
- left - 50%
- transform: translateY(-50%)
- transform: translateX(-50%)

- static - normal.
- Realtive - good theif.
- Absolute - bad theif.
- fixed - 
- Sticky - static + Absolute (hybrid).

# Border-sizing: border-box;


# Picture Element



# Day_18

# HTML collection 
- document.getElementByClassName()
- document.getElementBytagName()
- length

# NodeList
- document.querySelectorAll()
- ForEach, length

# Array Conversion
- `Array.from()`
- Spread 

# XSS (attack)


## Day_19
- Event loop (AJS)
# callback
- When a function takes an another  function as argument.
- Argument is callback function.

# Asynchronous
- js is single thread and asynchronous.




# core
- processor
- thread


# Promise
- Pending
- fulfill
- Reject

# Promise methods
- 1 then
- 2 catch
- 3 finally
