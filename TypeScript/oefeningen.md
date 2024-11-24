# TypeScript files runnen

Maak een nieuwe folder aan op je computer. In de folder gaan we npm initialiseren en ervoor zorgen dat we typescript kunnen gebruiken.

### Stap 1 - npm initialiseren
Zorg ervoor dat je in de juiste folder zit. Initialiseer NPM met het volgende commando:
```bash
npm init
```

Volg de wizard om je project op te zetten. Waarschijnlijk is het voldoende om overal de default te nemen (gewoon op enter duwen).

Als alles goed is gegaan zie je nu een `package.json` file in je folder (en een `package-lock.json` file maar die mag je voorlopig negeren).

### Stap 2 - Installeer TypeScript
In de terminal gaan we nu het volgende runnen om typescript in ons project te installeren:
```bash
npm install typescript
```

Als alles goed is gegaan zal je zien dat het volgende gebeurd is:
- De terminal geeft een success boodschap waarin staat dat 1 package toegevoegd is (en meerdere geaudit)
- Er is een package als `dependency` bijgekomen in je `package.json` file
- Er is een folder `node_modules` bijgekomen in je folder

### Stap 3 - Initialiseer TypeScript
In diezelfde folder, gaan we nu typescript initialiseren. Dit doe je aan de hand van het volgende commando:
```bash
npx tsc --init
```

Als alles goed is gegaan is er nu een `tsconfig.json` file bijgekomen in je folder. Je mag er altijd eens naar kijken maar voorlopig gebruiken we de default waarden dus je moet niks aanpassen.


### Stap 4 - Runnen van TS files
Je kan nu op 2 manieren je typescript files runnen wanneer je je oefeningen wilt testen:

#### 1. Script in package.json
Omdat je waarschijnlijk vaak hetzelfde gaat willen doen zou ik er een script van maken. Als je al je oefeningen in 1 file maakt, bv `index.ts` kan je gewoon een script definieren als volgt:

```json
{
  "scripts": {
    "build-and-run": "tsc index.ts && node index.js"
  }
}
```

Je kan dan het volgende in de terminal uitvoeren om je code te testen:
```bash
npm run build-and-run
```

Als je graag een andere file gebruikt per oefening maar niet telkens je script wil aanpassen kan je het volgende toevoegen in je package.json
```json
{
  "scripts": {
    "build-and-run": "tsc $npm_config_file && node ${npm_config_file%.ts}.js"
  }
}
```

En dan run je dit op de volgende manier:
```bash
npm run build-and-run --file=oefening1.ts
```
Waar je expliciet de file naam meegeeft van de file die je wilt testen.

#### 2. Zelf builden en runnen
Als je liever niet met scripts werkt om de een of andere reden kan je ook zelfs in de terminal het volgende uitvoeren elke keer:

```bash
npx tsc index.ts && node index.js
```

# Oefeningen

## Oefening 1 - De som van 2 getallen
Schrijf een functie `addNumbers` die als input parameters 2 getallen aanvaard en de som van de twee teruggeeft.
Definieer zowel voor de input parameters als de return waarde de types expliciet.

```typescript
console.log(addNumbers(5, 10));  // Output: 15
console.log(addNumbers(2.5, 7.5));  // Output: 10
```

## Oefening 2 - String concatenation
Schrijf een functie `concatStrings` die twee strings als input parameters neemt en als resultaat een geconcatineerde string teruggeeft.
```typescript
console.log(concatStrings('Hello', 'World'));  // Output: "Hello World"
console.log(concatStrings('TypeScript', 'Rocks'));  // Output: "TypeScript Rocks"
```

### Oefening 3 - Check of getal even is
Schrijf een functie die als input parameter een getal aanvaard en `true` teruggeeft als het een even getal is, en `false` als het een oneven getal is.

**HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder**

```typescript
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false
```

### Oefening 4 - Lengte van een string checken
Schrijf een functie `isLongerThan` die 2 parameters aanvaard, een string en een getal. De functie geeft `true` terug als de lengte van de string groter is dan het getal, en `false` als dat niet zo is.

```typescript
console.log(isLongerThan('TypeScript', 5));  // Output: true
console.log(isLongerThan('TS', 5));  // Output: false
```

### Oefening 5 - Simpele rekenmachine
Schrijf een functie `calculate` die 3 input parameters aanvaard: 2 getallen en een string. De string kan 4 waardes aannemen: `add`, `subtract`, `multiple`, `divide`. De functie doet de gepaste bewerking die je meegeeft in de string, met de twee getallen en geeft het resultaat terug. Bijvoorbeeld:
```typescript
calculate(1,1, "add"); // functie doet 1+1, resultaat is 2
calculate(4,2, "divide"); // functie doet 4/2, resultaat is 2
calculate(10,6, "subtract"); // functie doet 10-6, resultaat is 4
```

### Oefening 6 - Default parameters
Schrijf een functie `greet` die een verplichte parameter `name` heeft en een optionele parameter `greeting`. De functie print de greeting uit, gevolgd door de naam. Als er geen greeting meegegeven wordt, gebruikt het default `Hello` als greeting.

```typescript
greet('Alice');  // Output: "Hello, Alice!"
greet('Bob', 'Hi');  // Output: "Hi, Bob!"
```

### Oefening 7 - Som getallen in een Array
Schrijf een functie `sumArray` die een array van getallen als input parameter heeft en de som van alle getallen in de array teruggeeft.
```typescript
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
console.log(sumArray([10, 20, 30]));  // Output: 60
```

### Oefening 8 - Maximum getal in een Array vinden
Schrijf een functie `findMax` die een array van nummers als input parameter heeft en het grootste getal in de array teruggeeft

**HINT: https://www.w3schools.com/jsref/jsref_max.asp**

```typescript
console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5
console.log(findMax([10, 20, 5, 50, 25]));  // Output: 50
```

### Oefening 9 - Filteren even nummers
Schrijf een functie die een array van getallen als input heeft en een nieuwe array van getallen teruggeeft waar alleen de even nummers inzitten.

**HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder**
**HINT: https://www.w3schools.com/jsref/jsref_filter.asp**

```typescript
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]
console.log(filterEvenNumbers([11, 13, 15]));  // Output: []
```

### Oefening 10: Array van getallen converteren naar array van kwadraten
Schrijf een functie `squareNumbers` die een array van getallen als input parameter heeft en een nieuwe array teruggeeft waar elk getal het kwadraat is van het originele getal.

**HINT: https://www.w3schools.com/jsref/jsref_map.asp**

```typescript
console.log(squareNumbers([1, 2, 3, 4]));  // Output: [1, 4, 9, 16]
console.log(squareNumbers([5, 6, 7]));  // Output: [25, 36, 49]
```

### Oefening 11 - Interface Person
Schrijf een interfaces `Person`. `Person` heeft de volgende eigenschappen:
- `name` (string)
- `age` (number)
- `email` (string)
- `isAdmin` (boolean)

Schrijf nu een functie `greetPerson` die een `Person` aanvaardt als input parameters en een gepersonaliseerde begroeting afprint.

```typescript
const joe: Person = {"name": "Joe", "age": 30, "email": "joe@joemail.com", "isAdmin": true};
const jane: Person = {"name": "Jane", "age": 18, "email": "jane@janemail.com", "isAdmin": false};

console.log(greetPerson(joe)) // Hello, Joe (joe@joemail.com)! You are 30 years old. You are admin of the system.
console.log(greetPerson(jane)) // Hello, Jane (jane@janemail.com)! You are 18 years old. You are not admin of the system.
```

### Oefening 12 - Interface Product
Schrijf een interface `Product` die een product in een online shop moet voorstellen. Het heeft de volgende eigenschappen:
- `name` (string)
- `price` (number)
- `category` (string)
- Optional `discount` (number)

Schrijf een functie `printProductDetails` die een `Product` als input parameter aanvaardt en alle details afprint. Als er geen `discount` gedefinieerd is moet er ook niks over afgeprint worden.


```typescript
printProductDetails({name: 'Laptop', price: 999, category: 'Electronics'}); // Product: Laptop; Price: €999; Category: Electronics; 
printProductDetails({name: 'Printer', price: 99, category: 'Electronics', discount: 10}); // Product: Printer; Price: €99; Category: Electronics; Discount: 10%
```

### Oefening 13 - Enums en interfaces
Maak een `enum` die `UserRole` noemt en volgende waardes heeft:
- `Admin`
- `Editor`
- `Viewer`

Maak een Type Alias die eigenlijk een `string` is maar die je `UserID` noemt.

Maak nu een interface `User` die volgende eigenschappen heeft:
- `id`   (UserID)
- `name` (string)
- `role` (UserRole)

Schrijf een functie `checkPermissions` die een `User` als input parameter aanvaardt en een ander bericht print afhankelijk van de rol van de gebruiker:
- `Admin`: Full access
- `Editor`: Can edit content
- `Viewer`: Read-only access

```typescript
const adminUser: User = { id: '123', name: 'Alice', role: UserRole.Admin };
const editorUser: User = { id: '124', name: 'Bob', role: UserRole.Editor };
const viewerUser: User = { id: '125', name: 'Charlie', role: UserRole.Viewer };

checkPermissions(adminUser);   // Alice (123) has full access.
checkPermissions(editorUser);  // Bob (124) can edit content.
checkPermissions(viewerUser);  // Charlie (125) has read-only access.
```

### Oefening 14 - Nested interfaces

Maak een interface `Address` die de volgende eigenschappen bevat:
- `street`: string
- `city`: string
- `postalCode`: number

Maak ook een interface `Customer` die de volgende eigenschappen bevat:
- `name`: string
- `age`: number
- Optioneel: `address`: een object van het type `Address`

Schrijf de volgende functies:
1. `isAdultCustomer`: Neemt een `Customer` object aan en geeft een boolean terug die aangeeft of de klant een volwassene is (18 jaar of ouder).
2. `changeAddress`: Neemt een `Customer` object en een `Address` als parameters, en retourneert een nieuw `Customer` object met het bijgewerkte adres.

```ts
// Test:
const customer1: Customer = {
    name: "Alice",
    age: 22,
    address: {
        street: "Andre Dumontlaan",
        city: "Genk",
        postalCode: 3600
    }
};

const customer2: Customer = {
    name: "Bob",
    age: 16
};

const newAddress: Address = {
    street: "Universiteitslaan",
    city: "Hasselt",
    postalCode: 3500
};

console.log(isAdultCustomer(customer1)); // true
console.log(isAdultCustomer(customer2)); // false

const updatedCustomer = changeAddress(customer1, newAddress);
console.log(updatedCustomer);
/* Output:
{
  name: 'Alice',
  age: 22,
  address: { street: 'Universiteitslaan', city: 'Hasselt', postalCode: 3500 }
}
*/
```

### Oefening 15 : Transportmiddel Classificatie
Stel dat we een systeem moet maken om verschillende soorten transportmiddelen op te slaan. Een transportmiddel kan verschillende vormen aannemen zoals een auto, fiets, of vliegtuig. Elk transportmiddel heeft bepaalde eigenschappen.

1. **Car** heeft:
   - `make`: string (bijvoorbeeld "Toyota")
   - `model`: string (bijvoorbeeld "Corolla")
   - `year`: number (bouwjaar)

2. **Bike** heeft:
   - `brand`: string (bijvoorbeeld "Gazelle")
   - `type`: string (bijvoorbeeld "racefiets")

3. **AirPlane** heeft:
   - `manufacturer`: string (bijvoorbeeld "Boeing")
   - `capacity`: number (aantal passagiers)

1. Maak een interface voor `Car`, `Bike` en `AirPlane` met de nodige eigenschappen.
2. Definieer een **union type** genaamd `Vehicle` dat ofwel een **Car**, **Bike**, of **AirPlane** kan zijn.
3. Schrijf een functie `describeVehicle` die een parameter van het type `Vehicle` accepteert en een string teruggeeft die het voertuig beschrijft. Om te bepalen welke specifieke `Vehicle` je functie binnenkrijgt, kan je op elke interface een extra eigenschap bijhouden bv `kind` waar je op kan checken.
4. Schrijf een functie `isVehicleModern` die controleert of een voertuig een auto is, en als dat het geval is, controleert of het model na het jaar 2010 is geproduceerd. De functie moet een boolean teruggeven.

```ts
const myCar: Car = { kind: "car", make: "Toyota", model: "Corolla", year: 2015 };
const myBike: Bike = { kind: "bike", brand: "Gazelle", type: "racefiets" };
const myAirplane: AirPlane = { kind: "airplane", manufacturer: "Boeing", capacity: 180 };

// Test de functies
console.log(describeVehicle(myCar)); // Car: Toyota Corolla, Year: 2015
console.log(describeVehicle(myBike)); // Bike: Gazelle, Type: racefiets
console.log(describeVehicle(myAirplane)); // Airplane: Boeing, Capacity: 180

console.log(isVehicleModern(myCar)); // true
console.log(isVehicleModern(myBike)); // false
```