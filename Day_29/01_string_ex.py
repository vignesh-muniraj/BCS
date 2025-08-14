


# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"

msg = "  Programming in Python is not only powerful but also fun!  "
msg = msg.strip().upper()

print(f"{msg[15:21]}-{msg[34:43]}")

value_1 = msg.find("Python")
value_2 = msg.find("powerful")


# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"

# Expected Output
# "python 🗡️ powerful 🌸"


after_reverse = flipped_message[::-1]  #Python with powerful opportunities and Endless fun!
print(after_reverse)
index1 = after_reverse.find("Python")
index2 = after_reverse.find("powerful")

print(f"{after_reverse[index1:6]} 🗡️  {after_reverse[index2:20]} 🌸")

# Task 1.3

# After the 🔑
message = "    🚨🔍📱🔑secret_code✌️"
# Clue: find

# Output
# SECRET_CODE✌️
output = message.strip().upper()
indx = output.find("🔑")
print(output[indx+1:])

