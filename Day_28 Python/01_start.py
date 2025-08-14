print("helo")

salary = 50_000    # numeric separator
print(salary)
print(type(salary))   #int                                       

# print(7//2)
print("Hello, 🌏")
# Declaring variable

# Dynamic Typing
name = "Rabert" # -> '', "", """, ''' (multi line)
salary = 50_000 # numeric separator
height = 175.5
is_rich = True # snake_case


# Primitive Datatype
print(name)
print(salary)
print(height)
print(is_rich)

print(type(name)) # <class 'str'>
print(type(salary)) # <class 'int'>
print(type(height)) # <class 'float'> 
print(type(is_rich)) # <class 'bool'>

print(30 + 60) # 90


age = 20
# print("My age is: " + age)

# Type Conversion 
# 1. str
# 2. int
# 3. float
# 4. bool

# My age is: 20
print("My age is: " + str(age))


# f-string (Template Literal)
print(f"My age is: {age}")

followers = 2_000_000
# {} -> Interpolation
# Expression
print(f"My age is: {age} and my followers are {followers * 2}")

# Python = JavaScript - {}
# Python respects indentation
