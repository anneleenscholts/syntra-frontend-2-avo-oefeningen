# Oefeningen gedrag JavaScript
## Oefening 1 - Scope
### Deel 1 - Local scope
1. Schrijf een functie `testScope` waarin je een variabele definieert met `let` of `const` binnen de functie. `console.log` deze variabele in de functie.
2. Probeer daarna de variabele buiten de functie te loggen. Wat gebeurt er?

### Deel 2 - Block scope
3. Schrijf een tweede functie `testBlockScope`. `testBlockScope` gaat 10 keer een string afprinten. Schrijf een loop en definieer een string met `let` of `const` die je 10 keer wilt afprinten in die loop.
4. Wat als je de string nu nog 1 keer wilt afprinten als de for loop al gedaan is (dus buiten de loop)?
5. Gebruik `var` in plaats van `let` of `const` en bekijk het verschil voor situatie 4.

## Oefening 2 - Closures
1. Maak een functie createGreeter die een naam als (input)parameter neemt.
2. De functie moet een andere functie retourneren die "Hallo" print naar de console, gevolgd door de naam die je als input meegegeven hebt.

# Oefeningen Classes

## Oefening 3 - Classes
#### Opgave
Maak een class `BankAccount` die een bankrekening simuleert. De bankrekening moet een saldo bevatten, en je moet kunnen storten, opnemen, en het huidige saldo opvragen. Zorg ervoor dat de class veilig met het saldo omgaat en voorkom dat het saldo negatief wordt.

#### Stappen:
1. Een bankaccount is altijd van iemand, dus zorg ervoor dat wanneer je een nieuwe bankaccount maakt, je er ook eigenaar aan kan toekennen.
2. Maak een class `BankAccount` die:
   - Een **saldo** heeft dat default op 0 staat.
   - Een methode `deposit` heeft om geld te storten op de rekening. De methode `deposit` aanvaardt een input parameter die het bedrag is dat je wilt storten.
   - Een methode `withdraw` heeft om geld op te nemen van de rekening. Deze methode moet een foutmelding geven als het opnamebedrag groter is dan het saldo. De methode aanvaardt een input parameter die het bedrag is dat je wilt opnemen.
   - Een methode `getBalance` heeft om het huidige saldo op te vragen.
3. Maak een instantie van `BankAccount` en test de verschillende methodes.

#### Tips
1. **Constructor**: Zorg ervoor dat het saldo in de constructor wordt gedefinieerd. De eigenaar wordt meegegeven (een string van een naam) wanneer je `new Bankaccount` doet dus die moet ook in de constructor opgeslagen worden.
2. **Deposit Methode**: Schrijf een methode die het bedrag toevoegt aan het saldo.
3. **Withdraw Methode**: Schrijf een methode die het bedrag afhaalt van het saldo, maar controleer eerst of er voldoende saldo is.
4. **GetBalance Methode**: Schrijf een methode die het huidige saldo retourneert.

### Uitdagingen:
- Zorg ervoor dat de `withdraw`-methode geen negatieve opnames toestaat (bijv. `account.withdraw(-50)` zou niet moeten werken). Hetzelfde voor de `deposit` functie.
- Voeg een extra methode toe, `transfer(amount, anotherAccount)`, die geld van de ene rekening naar de andere overboekt. Zorg ervoor dat er voldoende saldo is voordat de overboeking wordt uitgevoerd. Het bedrag dat overgeschreven moet worden kan niet negatief zijn. `anotherAccount` is ook een instantie van `Bankaccount` met zijn eigen `deposit` en `withdraw` methode.

# Oefeningen asynchroon gedrag
## Oefening 4 - Asynchrone code

#### Beschrijving:
Maak een functie `guessAge` die een input parameter `name` aanneemt en een `fetch` uitvoert naar `https://api.agify.io?name=${name}`. Maak een andere functie `whatsMyAge` die `guessAge` gebruikt en log de geretourneerde waarde. Je mag kiezen of je Promises of async/await gebruikt.

#### Opdracht:
1. Maak een functie `guessAge` die een `fetch` call uitvoert. `guessAge` aanvaardt een input parameter `name`.
2. Gebruik async/await of then() om de geretourneerde waarde op te vangen en te loggen.

## Oefening 5 - Error Handling met asynchrone code

#### Beschrijving:
Voeg error handling toe aan de code hierboven. Afhankelijk van of je Promises of async/await gebruikt zal je dat met een `catch` of een `try/catch` moeten doen.

1. Schrijf de correcte error handling (try/catch of catch).
2. Je kan je catch block testen door de `.io` in de url te verwijderen. "`https://api.agify?names=${name}`"

## Oefening 6 - Simuleren van meerdere asynchrone acties met Promise.all

#### Beschrijving:
Stel nu de je de `guessAge` functie voor 2 namen tegelijk wilt uitvoeren. Herschrijf de functie `whatsMyAge` zodat die 2 namen als input parameters aanvaardt en doe 2 calls naar `guessAge`.

#### Opdracht:
1. Herschrijf de functie `whatsMyAge` zodat je 2 namen moet meegeven.
2. Probeer eerst met `async/await` 2 keer uit te voeren, 1 keer voor elke naam.
2. Gebruik nu eens `Promise.all` om op beide resultaten te wachten.
3. Log de gecombineerde resultaten.
4. Wat valt je op in het verschil qua timing?

# Oefeningen TypeScript
Best in een aparte folder maken waar je TypeScript installeert.

Zie [Les TypeScript](./../TypeScript/oefeningen/oefeningen.md) om nog eens te lezen hoe TS in een folder geinstalleerd moet worden. Niet vanbuiten leren, als je dit nodig zou hebben op bv het examen dan staat het ook altijd erbij.

## Oefening 7 - JS naar TS
Kijk in de folder "oefeningen_converteren" naar oefening 7. Dit is een typescript file maar er zijn nog geen types toegevoegd. Voeg **overal waar je kan** types toe. Vergeet de return types van functies niet.

## Oefening 8 - JS naar TS
Kijk in de folder "oefeningen_converteren" naar oefening 8. Dit is een typescript file maar er zijn nog geen types toegevoegd. Voeg **overal waar je kan** types toe. Vergeet de return types van functies niet.

In `createUser` wordt nu `isAdmin` altijd op `false` gezet. Stel dat je dit niet in de functie zelf, maar via een default value wilt doen die je kan overschrijven, hoe zou je dat dan aanpakken?

## Oefening 9 - JS naar TS
Kijk in de folder "oefeningen_converteren" naar oefening 9. Dit is een typescript file maar er zijn nog geen types toegevoegd. Voeg **overal waar je kan** types toe. Vergeet de return types van functies niet.

## Oefening 10: **Enums**
1. Maak een enum `Direction` met de waarden `North`, `East`, `South`, en `West`.
2. Maak een functie `move` die een parameter van het type `Direction` accepteert en een bericht afdrukt afhankelijk van de waarde van de parameter.

## Oefening 11: Fantasy Character

Maak een interface FantasyCharacter voor een personage in een fantasiewereld. Elk personage heeft een name (string), een race (enum 'Elf', 'Orc', 'Dwarf'), en een hitPoints (number). Schrijf een functie die de gemiddelde hitPoints van een lijst van FantasCharacters berekent.

In onze FantasyWereld leven ook mensen. Voeg een interface toe "Human". Een Human heeft een name (string) en een weapon (enum "Sword", "Bow", "Axe", "Magic Staff").
Definieer nu een type "Character" die zowel een "FantasyCharacter" als een "Human" kan zijn (gebruik een union).

Maak een human aan en probeer die ook eens mee te geven aan `calculateAverageHitpoints`, wat gebeurt er? Wat zou je moeten aanpassen om het wel te laten lukken?

Schrijf een functie `humansWithWeapon` waar je een lijst van `Human` en een `Weapon` als input krijgt en die een gefilterde lijst teruggeeft van alleen de `Human`s die dat wapen gebruiken.

## Oefening 12: Robots
Maak een interface Robot met een model (string), batteryLife (number, uren), en een purpose (bijvoorbeeld 'Housekeeping', 'Security', 'SmartHome'). Schrijf een functie die de robot met de langste batterijduur teruggeeft.


## oefening 13: Spaceship
Maak een interface Spaceship met eigenschappen zoals name (string), fuelLevel (number, in percentages), en isOperational (boolean). Schrijf een functie die controleert of alle ruimteschepen in de vloot operationeel zijn.

We kunnen voor ruimteschepen een enum toevoegen voor een veld `shipType`, dat aangeeft of het ruimteschip een `Fighter`, `Freighter`, of `Explorer` is, en een enum voor `FuelLevelStatus` (hoog, medium, laag) op basis van de brandstofvoorraad.

Schrijf een functie die een input parameter `fuelLevel` heeft en een `FuelLevelStatus` teruggeeft op basis van volgdende criteria:
- als fuelLevel groter is dan 70, dan is het HIGH
- als fuelLevel groter dan 30 maar kleiner dan 70 is, dan is het MEDIUM
- Onder de 30 is het LOW

Schrijf een functie `getShipsWithLowFuel` die een fleet van SpaceShips als input parameter neemt en een gefilterde lijst teruggeeft van alle schepen die een laag brandstopniveau hebben. De functie die je hierboven geschreven hebt komt waarschijnlijk goed van pas.

## Oefening 14 - Superheros
Maak een interface Superhero met eigenschappen zoals alias (string), powers (array van strings), en isActive (boolean). Schrijf een functie die alle actieve superhelden retourneert.

Stel nu dat er een eindige lijst van Powers bestaat. Herschijf de code zodat Powers een enum is en een Superhero een lijst van Powers heeft in plaats van een array van strings.

Schrijf een functie die een lijst van Superheroes filters op het al dan niet hebben van een bepaalde Power.