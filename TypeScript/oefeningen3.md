### Oefening 1: Type annotations en type inference
Schrijf een functie `sum` die twee parameters van het type `number` neemt en de som van die getallen retourneert. Voeg expliciete type-annotaties toe aan de parameters en de return-waarde.

**Uitdaging:**
Laat TypeScript automatisch het type van de return-waarde afleiden (type inference).

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

```

### Oefening 2: Objecten en interfaces
Maak een interface `Person` met de eigenschappen `name`, `age`, en een optionele eigenschap `email`. Schrijf een functie `greet` die een object van het type `Person` als parameter accepteert en een groet retourneert. 

**Uitdaging:**
Maak een klasse `Student` die de interface `Person` implementeert.

```typescript
interface Person {
  name: string;
  age: number;
  email?: string; // Optionele eigenschap
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// Uitdaging: Implementeer een klasse Student die de interface Person gebruikt.
class Student implements Person {
  name: string;
  age: number;
  email?: string;

  constructor(name: string, age: number, email?: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
```

### Oefening 3: Unions en literal types
Definieer een union type genaamd `Status`, met de waarden `"success"`, `"error"`, of `"pending"`. Schrijf een functie `getStatusMessage` die een `Status` als parameter accepteert en een gepersonaliseerd bericht retourneert op basis van de status.

```typescript
type Status = "success" | "error" | "pending";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "success":
      return "Operation was successful!";
    case "error":
      return "There was an error.";
    case "pending":
      return "Operation is pending.";
  }
}
```

### Oefening 4: Generics
Schrijf een generieke functie `getFirstElement` die een array van elk type accepteert en het eerste element van die array retourneert.

**Uitdaging:**
Schrijf een generieke klasse `Box` die elk type kan bevatten en een methode `getItem` heeft om het item in de box te retourneren.

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Uitdaging: Implementeer een generieke klasse Box
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}
```

### Oefening 5: Tuples en functie-handtekeningen
Schrijf een functie `swap` die een tuple van twee waarden accepteert en de twee elementen omwisselt. De functie moet generiek zijn, zodat het met elk type kan werken.

```typescript
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// Voorbeeldgebruik:
const swapped = swap([7, "hello"]); // ["hello", 7]
```

### Oefening 6: Optional parameters en default values
Schrijf een functie `createUser` die een `name` en een optionele `age` als parameters accepteert. Als de `age` niet wordt opgegeven, moet de standaardwaarde `18` zijn.

```typescript
function createUser(name: string, age: number = 18): { name: string, age: number } {
  return { name, age };
}

// Voorbeeldgebruik:
const user1 = createUser("Alice");    // { name: "Alice", age: 18 }
const user2 = createUser("Bob", 25);  // { name: "Bob", age: 25 }
```

### Oefening 7: Enum types
Maak een `enum` genaamd `Color` met de waarden `Red`, `Green`, en `Blue`. Schrijf een functie `getColorCode` die een `Color` als parameter accepteert en een bijbehorende hexadecimale kleurcode retourneert.

```typescript
enum Color {
  Red,
  Green,
  Blue
}

function getColorCode(color: Color): string {
  switch (color) {
    case Color.Red:
      return "#FF0000";
    case Color.Green:
      return "#00FF00";
    case Color.Blue:
      return "#0000FF";
  }
}

// Voorbeeldgebruik:
console.log(getColorCode(Color.Green)); // "#00FF00"
```

### Oefening 8: Type Aliases en Union Types
Definieer een type-alias `ID` die ofwel een `number` of een `string` kan zijn. Schrijf een functie `printID` die een `ID` als parameter accepteert en het type van de ID detecteert.

```typescript
type ID = string | number;

function printID(id: ID): void {
  if (typeof id === "string") {
    console.log(`The ID is a string: ${id}`);
  } else {
    console.log(`The ID is a number: ${id}`);
  }
}

// Voorbeeldgebruik:
printID("abc123"); // "The ID is a string: abc123"
printID(123456);   // "The ID is a number: 123456"
```

### Oefening 9: Intersection Types
Definieer twee types `Person` en `Employee`, waarbij `Employee` de eigenschappen van `Person` erft en een extra eigenschap `role` heeft. Schrijf een functie `describeEmployee` die een `Employee` accepteert en een beschrijving retourneert.

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  role: string;
};

function describeEmployee(employee: Employee): string {
  return `${employee.name} is ${employee.age} years old and works as a ${employee.role}.`;
}

// Voorbeeldgebruik:
const emp: Employee = { name: "Alice", age: 30, role: "Developer" };
console.log(describeEmployee(emp)); // "Alice is 30 years old and works as a Developer."
```

### Oefening 10: Type Guards en Narrowing
Schrijf een functie `isString` die een **type guard** implementeert om te controleren of een waarde een `string` is. Gebruik deze functie in een andere functie `printLength`, die de lengte van een string afdrukt als de parameter een string is, of een foutmelding als het dat niet is.

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function printLength(value: any): void {
  if (isString(value)) {
    console.log(`The length of the string is: ${value.length}`);
  } else {
    console.log("The value is not a string.");
  }
}

// Voorbeeldgebruik:
printLength("Hello, world!"); // "The length of the string is: 13"
printLength(42);              // "The value is not a string."
```

---