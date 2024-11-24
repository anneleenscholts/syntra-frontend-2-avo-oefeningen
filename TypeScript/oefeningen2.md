### Oefening 1: **Typen definiëren**

#### Beschrijving:
TypeScript laat je typen toekennen aan variabelen, functies en objecten. In deze oefening moet je enkele variabelen en functies typen definiëren.

#### Opdracht:
1. Definieer een variabele `age` van het type `number`.
2. Definieer een variabele `name` van het type `string`.
3. Maak een functie `greet` die één parameter heeft van het type `string` en een `string` retourneert.

```ts
let age: number = 25;
let name: string = "John";

function greet(person: string): string {
    return `Hello, ${person}!`;
}

console.log(greet(name)); // "Hello, John!"
```

---

### Oefening 2: **Werken met objecttypen**

#### Beschrijving:
In TypeScript kun je objecttypen definiëren met specifieke eigenschappen en typen.

#### Opdracht:
1. Maak een object `person` met de eigenschappen `name` (string) en `age` (number).
2. Typ het object correct met behulp van een `type` alias of interface.

```ts
type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: "Alice",
    age: 30,
};

console.log(person);
```

---

### Oefening 3: **Gebruik van Union Types**

#### Beschrijving:
Met **Union Types** kun je aangeven dat een variabele of parameter meerdere typen kan hebben.

#### Opdracht:
1. Definieer een variabele `status` die zowel een `string` als een `number` kan zijn.
2. Maak een functie `printStatus` die een `status` als parameter accepteert (die zowel `string` als `number` kan zijn).

```ts
let status: string | number;

function printStatus(status: string | number): void {
    console.log(`De status is: ${status}`);
}

status = "active";
printStatus(status); // "De status is: active"

status = 200;
printStatus(status); // "De status is: 200"
```

---

### Oefening 4: **Interfaces gebruiken**

#### Beschrijving:
**Interfaces** worden gebruikt om de structuur van objecten te definiëren. In deze oefening ga je werken met interfaces.

#### Opdracht:
1. Definieer een interface `Car` met de eigenschappen `make` (string) en `model` (string).
2. Maak een functie `getCarInfo` die een `Car` als parameter accepteert en een string retourneert met de informatie over de auto.

```ts
interface Car {
    make: string;
    model: string;
}

function getCarInfo(car: Car): string {
    return `Auto: ${car.make} ${car.model}`;
}

let myCar: Car = { make: "Toyota", model: "Corolla" };
console.log(getCarInfo(myCar)); // "Auto: Toyota Corolla"
```

---

### Oefening 5: **Classes en Constructor Typing**

#### Beschrijving:
TypeScript ondersteunt het gebruik van **classes** met getypte properties en methodes.

#### Opdracht:
1. Maak een class `Person` met de eigenschappen `name` (string) en `age` (number).
2. Definieer een constructor die deze eigenschappen initialiseert.
3. Voeg een methode `describe` toe die een string retourneert met de naam en leeftijd van de persoon.

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    describe(): string {
        return `${this.name} is ${this.age} jaar oud.`;
    }
}

let person1 = new Person("Bob", 25);
console.log(person1.describe()); // "Bob is 25 jaar oud."
```

---

### Oefening 6: **Generics**

#### Beschrijving:
Generics maken functies en classes flexibel door typen te accepteren die pas tijdens het gebruik worden gespecificeerd.

#### Opdracht:
1. Maak een generieke functie `identity` die een waarde van elk type accepteert en diezelfde waarde retourneert.
2. Gebruik de generieke functie met verschillende typen (bijv. string en number).

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hallo");
let output2 = identity<number>(42);

console.log(output1); // "Hallo"
console.log(output2); // 42
```

---

### Oefening 7: **Optional Properties en Default Parameters**

#### Beschrijving:
TypeScript ondersteunt optionele eigenschappen in objecten en standaardparameters in functies.

#### Opdracht:
1. Maak een interface `Book` met de eigenschappen `title` (string), `author` (string) en een optionele eigenschap `yearPublished` (number).
2. Maak een functie `printBookInfo` die de informatie van een `Book` object afdrukt. Zorg ervoor dat de functie standaard een bericht afdrukt als het boek geen publicatiejaar heeft.

```ts
interface Book {
    title: string;
    author: string;
    yearPublished?: number;
}

function printBookInfo(book: Book): void {
    if (book.yearPublished) {
        console.log(`${book.title} van ${book.author}, gepubliceerd in ${book.yearPublished}.`);
    } else {
        console.log(`${book.title} van ${book.author}, publicatiejaar onbekend.`);
    }
}

let book1: Book = { title: "1984", author: "George Orwell", yearPublished: 1949 };
let book2: Book = { title: "Animal Farm", author: "George Orwell" };

printBookInfo(book1); // "1984 van George Orwell, gepubliceerd in 1949."
printBookInfo(book2); // "Animal Farm van George Orwell, publicatiejaar onbekend."
```

---

### Oefening 8: **Enums**

#### Beschrijving:
Enums geven een naam aan een verzameling gerelateerde waarden in TypeScript.

#### Opdracht:
1. Maak een enum `Direction` met de waarden `North`, `East`, `South`, en `West`.
2. Maak een functie `move` die een parameter van het type `Direction` accepteert en een bericht afdrukt afhankelijk van de waarde van de parameter.

```ts
enum Direction {
    North,
    East,
    South,
    West
}

function move(direction: Direction): void {
    switch (direction) {
        case Direction.North:
            console.log("Je gaat naar het noorden.");
            break;
        case Direction.East:
            console.log("Je gaat naar het oosten.");
            break;
        case Direction.South:
            console.log("Je gaat naar het zuiden.");
            break;
        case Direction.West:
            console.log("Je gaat naar het westen.");
            break;
    }
}

move(Direction.North); // "Je gaat naar het noorden."
move(Direction.West);  // "Je gaat naar het westen."
```

---

### Oefening 9: **Type Narrowing**

#### Beschrijving:
**Type Narrowing** helpt bij het beperken van een brede set mogelijke typen tot een specifieker type binnen een functie.

#### Opdracht:
1. Maak een functie `formatInput` die een parameter accepteert die ofwel een `string` of een `number` is.
2. Als de parameter een `number` is, converteer deze naar een string en plak er "€" aan vast.
3. Als de parameter een `string` is, converteer deze naar hoofdletters.

```ts
function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `€${input.toFixed(2)}`;
    } else {
        return input.toUpperCase();
    }
}

console.log(formatInput(100));      // "€100.00"
console.log(formatInput("hello"));  // "HELLO"
```

---

### Oefening 10: **Readonly en Type Assertions**

#### Beschrijving:
**Readonly** eigenschap zorgt ervoor dat bepaalde eigenschappen van objecten niet kunnen worden aangepast nadat ze zijn ingesteld. **Type Assertions** stellen je in staat om aan te geven welk type je verwacht.

#### Opdracht:
1. Maak een interface `User` met een `readonly` id (number) en een `name` (string).
2. Gebruik type assertions om een object om te zetten naar een `User`.

```ts
interface User {
    readonly id: number;
    name: string;
}

let user: User = { id: 1, name: "Jane Doe" };

// Probeer dit te doen: user.id = 2; // Dit zou een fout geven omdat `id` readonly is

let user2 = { id: 2, name: "John Smith" } as User;

console.log(user2);
```

### Oefening 11: **Typen definiëren**

#### Beschrijving:
TypeScript laat je typen toekennen aan variabelen, functies en objecten. In deze oefening moet je enkele variabelen en functies typen definiëren.

#### Opdracht:
1. Definieer een variabele `age` van het type `number`.
2. Definieer een variabele `name` van het type `string`.
3. Maak een functie `greet` die één parameter heeft van het type `string` en een `string` retourneert.

```ts
let age: number = 25;
let name: string = "John";

function greet(person: string): string {
    return `Hello, ${person}!`;
}

console.log(greet(name)); // "Hello, John!"
```

---

### Oefening 12: **Werken met objecttypen**

#### Beschrijving:
In TypeScript kun je objecttypen definiëren met specifieke eigenschappen en typen.

#### Opdracht:
1. Maak een object `person` met de eigenschappen `name` (string) en `age` (number).
2. Typ het object correct met behulp van een `type` alias of interface.

```ts
type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: "Alice",
    age: 30,
};

console.log(person);
```

---

### Oefening 13: **Gebruik van Union Types**

#### Beschrijving:
Met **Union Types** kun je aangeven dat een variabele of parameter meerdere typen kan hebben.

#### Opdracht:
1. Definieer een variabele `status` die zowel een `string` als een `number` kan zijn.
2. Maak een functie `printStatus` die een `status` als parameter accepteert (die zowel `string` als `number` kan zijn).

```ts
let status: string | number;

function printStatus(status: string | number): void {
    console.log(`De status is: ${status}`);
}

status = "active";
printStatus(status); // "De status is: active"

status = 200;
printStatus(status); // "De status is: 200"
```

---

### Oefening 14: **Interfaces gebruiken**

#### Beschrijving:
**Interfaces** worden gebruikt om de structuur van objecten te definiëren. In deze oefening ga je werken met interfaces.

#### Opdracht:
1. Definieer een interface `Car` met de eigenschappen `make` (string) en `model` (string).
2. Maak een functie `getCarInfo` die een `Car` als parameter accepteert en een string retourneert met de informatie over de auto.

```ts
interface Car {
    make: string;
    model: string;
}

function getCarInfo(car: Car): string {
    return `Auto: ${car.make} ${car.model}`;
}

let myCar: Car = { make: "Toyota", model: "Corolla" };
console.log(getCarInfo(myCar)); // "Auto: Toyota Corolla"
```

---

### Oefening 15: **Classes en Constructor Typing**

#### Beschrijving:
TypeScript ondersteunt het gebruik van **classes** met getypte properties en methodes.

#### Opdracht:
1. Maak een class `Person` met de eigenschappen `name` (string) en `age` (number).
2. Definieer een constructor die deze eigenschappen initialiseert.
3. Voeg een methode `describe` toe die een string retourneert met de naam en leeftijd van de persoon.

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    describe(): string {
        return `${this.name} is ${this.age} jaar oud.`;
    }
}

let person1 = new Person("Bob", 25);
console.log(person1.describe()); // "Bob is 25 jaar oud."
```

---

### Oefening 16: **Generics**

#### Beschrijving:
Generics maken functies en classes flexibel door typen te accepteren die pas tijdens het gebruik worden gespecificeerd.

#### Opdracht:
1. Maak een generieke functie `identity` die een waarde van elk type accepteert en diezelfde waarde retourneert.
2. Gebruik de generieke functie met verschillende typen (bijv. string en number).

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hallo");
let output2 = identity<number>(42);

console.log(output1); // "Hallo"
console.log(output2); // 42
```

---

### Oefening 17: **Optional Properties en Default Parameters**

#### Beschrijving:
TypeScript ondersteunt optionele eigenschappen in objecten en standaardparameters in functies.

#### Opdracht:
1. Maak een interface `Book` met de eigenschappen `title` (string), `author` (string) en een optionele eigenschap `yearPublished` (number).
2. Maak een functie `printBookInfo` die de informatie van een `Book` object afdrukt. Zorg ervoor dat de functie standaard een bericht afdrukt als het boek geen publicatiejaar heeft.

```ts
interface Book {
    title: string;
    author: string;
    yearPublished?: number;
}

function printBookInfo(book: Book): void {
    if (book.yearPublished) {
        console.log(`${book.title} van ${book.author}, gepubliceerd in ${book.yearPublished}.`);
    } else {
        console.log(`${book.title} van ${book.author}, publicatiejaar onbekend.`);
    }
}

let book1: Book = { title: "1984", author: "George Orwell", yearPublished: 1949 };
let book2: Book = { title: "Animal Farm", author: "George Orwell" };

printBookInfo(book1); // "1984 van George Orwell, gepubliceerd in 1949."
printBookInfo(book2); // "Animal Farm van George Orwell, publicatiejaar onbekend."
```

---

### Oefening 18: **Enums**

#### Beschrijving:
Enums geven een naam aan een verzameling gerelateerde waarden in TypeScript.

#### Opdracht:
1. Maak een enum `Direction` met de waarden `North`, `East`, `South`, en `West`.
2. Maak een functie `move` die een parameter van het type `Direction` accepteert en een bericht afdrukt afhankelijk van de waarde van de parameter.

```ts
enum Direction {
    North,
    East,
    South,
    West
}

function move(direction: Direction): void {
    switch (direction) {
        case Direction.North:
            console.log("Je gaat naar het noorden.");
            break;
        case Direction.East:
            console.log("Je gaat naar het oosten.");
            break;
        case Direction.South:
            console.log("Je gaat naar het zuiden.");
            break;
        case Direction.West:
            console.log("Je gaat naar het westen.");
            break;
    }
}

move(Direction.North); // "Je gaat naar het noorden."
move(Direction.West);  // "Je gaat naar het westen."
```

---

### Oefening 19: **Type Narrowing**

#### Beschrijving:
**Type Narrowing** helpt bij het beperken van een brede set mogelijke typen tot een specifieker type binnen een functie.

#### Opdracht:
1. Maak een functie `formatInput` die een parameter accepteert die ofwel een `string` of een `number` is.
2. Als de parameter een `number` is, converteer deze naar een string en plak er "€" aan vast.
3. Als de parameter een `string` is, converteer deze naar hoofdletters.

```ts
function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `€${input.toFixed(2)}`;
    } else {
        return input.toUpperCase();
    }
}

console.log(formatInput(100));      // "€100.00"
console.log(formatInput("hello"));  // "HELLO"
```

---

### Oefening 20: **Readonly en Type Assertions**

#### Beschrijving:
**Readonly** eigenschap zorgt ervoor dat bepaalde eigenschappen van objecten niet kunnen worden aangepast nadat ze zijn ingesteld. **Type Assertions** stellen je in staat om aan te geven welk type je verwacht.

#### Opdracht:
1. Maak een interface `User` met een `readonly` id (number) en een `name` (string).
2. Gebruik type assertions om een object om te zetten naar een `User`.

```ts
interface User {
    readonly id: number;
    name: string;
}

let user: User = { id: 1, name: "Jane Doe" };

// Probeer dit te doen: user.id = 2; // Dit zou een fout geven omdat `id` readonly is

let user2 = { id: 2, name: "John Smith" } as User;

console.log(user2);
```