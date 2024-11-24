# Oefeningen - conditionele statements
## Oefening 1
Schrijf de body van de functie `isDitEenEvenGetal` zodat gecontroleerd wordt of de parameter `getal` die wordt doorgegeven een even of oneven getal is. Return een string waarin je zegt of het een even of een oneven getal is en die ook het getal dat je gecontroleerd hebt bevat.

Bv: `isDitEenEvenGetal(10)` zou moeten returnen `"10 is een even getal"` en `isDitEenEvenGetal(13)` zou moeten returnen `"13 is een oneven getal"`.

**HINT**: Er bestaat een operatie % die teruggeeft wat de rest van een deling is. 
```js
const resultaat = 8%2; // resultaat zal gelijk zijn aan 0
const resultaat2 = 9%2; //resultaat zal gelijk zijn aan 1
```
Voor meer info kijk je best een de [documentatie van de % (Remainder) functie na](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).


```js
function isDitEenEvenGetal(getal) {

}
```


# Oefeningen - functies en variabelen
## Oefening 2
### Deel 1
Wanneer ik deze javascript file run, verwacht ik dat er een console.log geprint wordt `"Dag cursisten! Welkom in het 2de jaar."` Wat we echter zien is dat de in de console.log `"watjemoetzeggen"` wordt afgeprint.

Dit is een bug.

Verbeter de functie zodat wanneer de file gerund wordt, er `"Dag cursisten! Welkom in het 2de jaar."` wordt afgeprint.

### Deel 2
De zin die ik wil afdrukken wordt op dit moment rechstreeks meegegeven aan de functie.

Sla `"Dag cursisten! Welkom in het 2de jaar."` op in een variabele. Let erop dat je de juiste manier kiest (`let` of `const`) en geef deze variabele mee aan de functie wanneer hij aanroepen wordt.

Wanneer de javascript gerund wordt zou hetzelfde afgeprint moeten worden als op het einde van Deel 1.

## Oefening 3
De functies `mijnFavorieteGroente` en `mijnFavorieteEten` aanvaarden allebei 1 parameter en loggen vervolgens een letterlijke string gevolgd door de waarde van het argument dat meegegeven wordt.

Herschrijf de functies zodat er gebruik gemaakt wordt van de backtick notatie.

Hoe noemen we een functie zoals de `mijnFavorieteEten`? En de notatie?


# Oefeningen - Iteratieve statements
## Oefening 4
### Deel 1
Schrijf een funtie `printAantalKeer` die als parameter een getal `hoeveelkeer` heeft en zoveel keer als gedefinieerd is in `hoeveelkeer` een console.log gaat printen. 
bv `printAantalKeer(4);` zou moeten printen:
```
We zijn al 1 keer door de loop gegaan
We zijn al 2 keer door de loop gegaan
We zijn al 3 keer door de loop gegaan
We zijn al 4 keer door de loop gegaan
```

### Deel 2
Breidt de functie uit zodat als het getal dat je meegeeft groter is dan 20 de functie een foutmelding afprint: `"Dit getal is te groot. Kies een getal kleiner dan 20."` en vervolgens returned.

### Deel 3
Maak de bovengrens een variabele die je definieert **in de functie**. Dus geen parameter maar een variabele die als scope de functie zelf heeft. Zorg dat de foutmelding ook dit getal gebruikt in plaats van 20.
