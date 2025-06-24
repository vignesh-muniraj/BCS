
# 🛡️ Marvel-Themed JavaScript Assessment

---

## ⭐ Easy

<details>
<summary>1. Hero ID Formatter (⭐)</summary>

### Task

Prompt the user for a hero’s name. Convert it to lowercase and uppercase. Display both on separate lines.

```js
 const name = prompt("Enter a name");
var lowerCase = name.toLowerCase();
var uppperCase = name.toUpperCase();
console.log(lowerCase);
console.log(uppperCase);
```
#### Example 1

**Input**: `"BlackPanther"`
**Output**:

```
blackpanther  
BLACKPANTHER
```

#### Example 2

**Input**: `"  ScarletWitch "`
**Output**:

```
scarletwitch  
SCARLETWITCH
```

</details>

---

<details>
<summary>2. Suit Version Type Check (⭐)</summary>

### Task

Tony inputs the suit version as a string. Convert it to number and log the type before and after conversion.

#### Example 1

**Input**: `"85"`
**Output**:

```
string  
number
```

#### Example 2

**Input**: `"007"`
**Output**:

```
string  
number
```

</details>

---

<details>
<summary>3. Hulk Smash Echo (⭐)</summary>

### Task

Ask the user for a sound effect (e.g., `"Smash!"`) and echo it 3 times in a single line.

#### Example 1

**Input**: `"Smash!"`
**Output**:

```
Smash!Smash!Smash!
```

#### Example 2

**Input**: `"Boom "`
**Output**:

```
Boom Boom Boom 
```

</details>

---

## ⭐⭐⭐ Medium

<details>
<summary>4. Stark Credits Calculator (⭐⭐⭐)</summary>

### Task

Prompt for two separate Stark wallet balances (as strings). Convert both to numbers and display the total credits.

### Answer
```js


const balance1 = prompt("Enter a  no:");
const balance2 = prompt("Enter a no;")
const total = parseInt(balance1) + parseInt(balance2) ;
console.log(`Your total balance is ${total} credits.`);

```

#### Example 1

**Input**: `"1000"`, `"5000"`
**Output**:

```
Your total balance is 6000 credits.
```

#### Example 2

**Input**: `"250"`, `"250"`
**Output**:

```
Your total balance is 500 credits.
```

</details>

---

<details>
<summary>5. Shield Temperature Scanner (⭐⭐⭐)</summary>

### Task

Prompt for the shield’s surface temperature in Celsius.

* > 120 → "🔥 Overheated!"
* < -10 → "❄️ Frozen!"
* Else → "🛡️ Stable."

```js
const celsius = +prompt("Enter a celsius");
var ans;
if(celsius >= 120){
   ans = "🔥 Overheated!";
}else if(celsius <= 10){
    ans = "❄️ Frozen!";
}else{
    ans =  "🛡️ Stable.";
}
console.log(ans);
```
#### Example 1

**Input**: `130`
**Output**:

```
🔥 Overheated!
```

#### Example 2

**Input**: `25`
**Output**:

```
🛡️ Stable.
```

</details>

---

<details>
<summary>6. Infinity Stone Energy Rank (⭐⭐⭐)</summary>

### Task

Prompt for the power level (0–100) of an infinity stone.
Rank:

* 90+ → "Legendary 💎"
* 60–89 → "Potent ⚡"
* <60 → "Weak 🪨"

```js
var ans;
var pow = +prompt("Power level");
if (pow >= 90) {
  ans = "Legendary 💎";
} else if (pow >= 60) {
  ans = "Potent ⚡";
} else {
  ans = "Weak 🪨";
}
console.log(ans);
```
#### Example 1

**Input**: `95`
**Output**:

```
Legendary 💎
```

#### Example 2

**Input**: `58`
**Output**:

```
Weak 🪨
```

</details>

---

<details>
<summary>7. Stark Email Generator (⭐⭐⭐)</summary>

### Task

Prompt for a name. Trim and convert it to lowercase. Output the Stark Industries email.

```js
var name = prompt("Enter Name: ").trim().toLowerCase();
var format = name +"@starkindustries.com";
console.log(format);
```
#### Example 1

**Input**: `" Peter "`
**Output**:

```
peter@starkindustries.com
```

#### Example 2

**Input**: `"WARMachine"`
**Output**:

```
warmachine@starkindustries.com
```

</details>

---

<details>
<summary>8. Jarvis Access Gate (⭐⭐⭐)</summary>

### Task

Prompt for an access code (number).

* 1000–1999 → “Access granted”
* Exactly 1700 → “⚠️ Override mode activated”
* Else → “Access denied”

```js
const code = +prompt("Enter a Code");
var ans;
if(code == 1700){
    ans = "⚠️ Override mode activated";
} else if(code >= 1000 && code <= 1999){
    ans = "Access granted";
}else{
    ans = "Access denied";
}
console.log(ans);
```
#### Example 1

**Input**: `1024`
**Output**:

```
Access granted
```

#### Example 2

**Input**: `1700`
**Output**:

```
⚠️ Override mode activated
```

</details>

---

## ⭐⭐⭐⭐ Hard

<details>
<summary>9. Speed Duel – Quicksilver vs Hawkeye (⭐⭐⭐⭐)</summary>

### Task

Prompt for their speeds. Log who is faster and by how much (in km/h).

```js
const person1 = prompt("Enter a first name:");
const person1Speed = +prompt("Enter speed");
const person2 = prompt("Enter a second name:");
const person2Speed = +prompt("Enter speed");
var ans;
var diff = Math.abs(person1Speed - person2Speed);
if(person1Speed > person2Speed){
   ans = `${person1} is faster than ${person2} by ${diff} km/h.`;
}else if(person2Speed > person1Speed){
    ans = `${person2} is faster than ${person1} by ${diff} km/h.`;
}else{
    ans = `${person1} and ${person2} are same speed.`;
}
console.log(ans);
```
#### Example 1

**Input**: `180`, `90`
**Output**:

```
Quicksilver is faster than Hawkeye by 90 km/h.
```

#### Example 2

**Input**: `150`, `160`
**Output**:

```
Hawkeye is faster than Quicksilver by 10 km/h.
```

</details>

---

<details>
<summary>10. S.H.I.E.L.D. Agent Validation (⭐⭐⭐⭐)</summary>

### Task

Prompt for a name. Normalize the input (trim + lowercase).
Validate against allowed agents: `"natasha"`, `"clint"`, `"nick"`.

* If match → "🛡️ Access granted"
* Else → "⛔ Unauthorized"

```js
const agents = prompt("Enter a name").trim().toLowerCase();
if(agents == "natasha" || agents == "clint" || agents == "nick"){
  console.log("🛡️ Access granted");
}else{
    console.log("⛔ Unauthorized");

}
```
#### Example 1

**Input**: `"  NiCk "`
**Output**:

```
🛡️ Access granted
```

#### Example 2

**Input**: `"tony"`
**Output**:

```
⛔ Unauthorized
```

</details>