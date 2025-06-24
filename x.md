
# Day 1 - Intro
## intro to browser

### what language does the browser understand 
>Note : chrome is built on c++
1.HTML
2.css
3.js

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
>to avoid file transfer and conect right person.
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

# HTTP  timeline

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
  #   + - / %

  ## relational operators (gives boolean ans)
  - <  > != == <= >= 
  
  ## Logical  (gives boolean ans)
  - &&  || 

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
-  var name =  "app";
-  var name =  "app";


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