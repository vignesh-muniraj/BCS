# Slice Operator [start:end:step] 
# end will not be included
# step - default - 1
fav_movie = "John Wick"
print(fav_movie[5:9]) 

print(fav_movie[5:])   # Wick
print(fav_movie[-4:])  # end

print(fav_movie[:])   # copy String

fav_movie = "John Wick"
print(fav_movie[1:6:2]) 
print(fav_movie[1:6:1]) 

# start + step
print(fav_movie[-4::-1]) # W nhoJ

# -4 -1 -1 -1 ...
print(fav_movie[-4:-2:-1]) 

print(fav_movie[-4:-2:+1]) # Wi


print(fav_movie[-1::-1]) # reverse string
print(fav_movie[::-1])  # reverse string


print(fav_movie.upper())
print(fav_movie.lower())

fav_movie = "John WiCk"
print(fav_movie.capitalize()) # John wick
print(fav_movie.title()) # John Wick
print(fav_movie.swapcase()) # jOHN wIcK



message = " Hi Hello    "
clean_msg = message.strip()

print(clean_msg)


# Strip - remove only leading & trailing characters
message = "   With great power comes great responsibility   "
clean_message = message.strip()

print(message)
print(clean_message)

coded_message = "********SO*S******"
decoded = coded_message.strip("*")

print(decoded)


quote = "Dream is not something that you see in sleep, Dream is something that does not let you sleep"
print(quote.count("Dream"))  # 2


print(quote.replace("Dream", "🛌💭"))
print(quote.replace("Dream", "🛌💭",1))

print(quote.find("something"))  #13
print(quote.find("helloall"))   # -1





