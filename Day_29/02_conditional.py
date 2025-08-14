no_of_person = 3


if no_of_person <= 2:
    print("We will take 🛵 to the party")
else:
    print("We will take 🏎️ to the party")


if no_of_person <= 2:
    print("We will take 🛵 to the party")
elif no_of_person == 3:
    print("We will take 🛺 to the party")
else:
    print("We will take 🏎️ to the party")


# if, else - 1, elif - multiple


# Task 1.1
# Get two person name and height
# Case 1:
# Ethan, Luvuyo
# 185cm, 175cm
# Ethan is taller than Luvuyo by 10cm


# person1 = input("Enter a person1 Name: ")
# person1_height = int(input("Enter a person1_age Name: "))
# person2 = input("Enter a person2 Name: ")
# person2_height = int(input("Enter a person2_age Name: "))

# diff = abs(person1_height - person2_height)

# if  person1_height > person2_height:
#     print(f"{person1} is taller than {person2} by {diff} cm")
# elif   person1_height < person2_height:
#     print(f"{person2} is taller than {person1} by {diff} cm")
# else:
#     print(f"{person1} and {person2} are of the same height")    



# Case 2:
# Ethan, Luvuyo
# 185cm, 194cm
# Luvuyo is taller than Ethan by 9cm


# Task 1.2
# Case 3:
# Ethan, Luvuyo
# 185cm, 185cm
# Ethan and Luvuyo are of the same height

#------------------------------------------------------------------------------

stock1 = "vanilla"
stock2 = "chocolate"
stock3 = "tin roof"
stock4 = "cookie dough"

stocks= ["vanilla","chocolate","tin roof","cookie dough"]

# Output
# Case 1
# Please enter your fav 🍧?: VAnilla
# Yes, we have vanilla in stock

# Case 2
# Please enter your fav 🍧?: salted Caramel
# Sorry, we ran out of Salted Caramel

# Task 1.1
# Clue: if..elif..else


# Task 1.2
# Clue: or (Refactoring)


# Task 1.3
# Clue: in (Refactoring)

input1 = input("Please enter your fav 🍧?")
item = input1.strip().lower()

# or
if item == stock1 or item ==  stock2 or item ==  stock3 or item ==  stock4:
     print(f"Yes, we have {item.title()} in stock")
else:     
     print(f"Sorry, we ran out of {item.title()}")


# in (includes)
if item in stocks:
    print(f"yes, we have {item} in stock ")
else:
    print(f"Sorry, we ran out of {item}")
        

# in  

if item in (stock1,stock2,stock3,stock4):
    print(f"yes, we have {item} in stock ")
else:
    print(f"Sorry, we ran out of {item}")