# Oefeningen - Asynchrone JavaScript
## Oefening 1 - Promises
- Schrijf een functie `fetchData` die een Promise returned. De promise moet resolven met een boodschap `"Data fetched"` na 2 seconden.
- Roep de functie `fetchData` op en print het resultaat van de resolved value af met `.then()`.

## Oefening 2 - Promises "chainen"
- Pas de functie `fetchData` aan zodat het een object teruggeeft. Het object stelt een restaurant voor en heeft een eigenschap `"id"` en een eigenschap `"naam"`.

```js
{
    "id": 1,
    "naam": "McDonalds Hasselt"
}
```

- Maak een 2de functie `fetchReviews` die het object dat door `fetchData` als parameter mee krijgt. `fetchReviews` returned zelf een Promise die na 2 seconden resolved en een object teruggeeft met als eigenschappen `"id"`, `"naam"` (dezelfde als van de input parameter) en `"reviews"`. `"reviews"` is een array van 10 getallen met een waarde tussen 1 en 5 (mag hardcoded zijn) die punten voorstellen van user reviews.

```js
{
    "id": 1,
    "naam": "McDonalds Hasselt,
    "reviews": [1, 3, 5, 1, 4, 2, 5, 5, 5, 4]
}
```
- Chain de promises nu aan elkaar zodat je eerst het restaurant ophaalt en dan de reviews. Gebruik `then()`.

## Oefening 3 - finally() en catch()
- Pas `fetchData` aan zodat het soms reject met een error. Dit kan je bijvoorbeeld doen op basis van een getal dat je meegeeft zoals in de les (groter dan / kleiner dan check) of door een random getal te genereren met `Math.random()` en dit in je if statement te gebruiken of ... . 
- Voeg error handling toe aan de functie die fetchData oproept door middel van een `catch()`.
- Gebruik `finally()` om een bericht naar de console te printen wanneer de promise van `fetchData` returned, ongeacht of het een succes of een error is.

## Oefening 4: Promises naar async / await 
- Herschrijf de Promise based code van oefening 2 naar code die `async` en `await` gebruikt.

## Oefening 5: Async/Await Error Handling
- Pas de async/await code van Oefening 4 aan zodat 1 van de 2 functies (`fetchData` of `fetchReviews`) reject met een error.
- Gebruik `try/catch` om de error op te vangen en correct weer te geven in de console.

## Oefening 6: Meerdere Promises in parallel
- Schrijf 2 functies: `fetchGames`en `fetchCharacters`. Beide returnen een Promise die resolved na 1 seconde met data. `fetchGames` geeft een Array van games terug, bijvoorbeeld: `["FIFA2024", "D&D"]`. `fetchCharacters` geeft een lijst met characters in verschillende spellen terug.
- Gebruik `Promise.all()` om de data van beide op te halen en log ze naar de console.

## Oefening 7: Vergelijking tussen Promise.all en async / await
- Schrijf 2 asynchrone functies `fetchData1` en `fetchData2`. Elke returned een Promise die resolved na 2 seconden.
- Probeer eerst de data van beide Promises op te halen met `Promise.all` en daarna met `async/await`. Vergelijk de tijd die beide versies nodig hebben met elkaar.


## Oefeningen - Real app
[https://github.com/anneleenscholts/joke-generator-start](https://github.com/anneleenscholts/joke-generator-start)

## Oplossing - Real app
[https://github.com/anneleenscholts/joke-generator](https://github.com/anneleenscholts/joke-generator)
