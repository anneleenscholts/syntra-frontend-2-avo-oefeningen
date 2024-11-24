## Deel 1
- Schrijf een klasse Spel met volgende eigenschappen (properties)
  - prijs
  - naam
  - omschrijving
  - aantal in stock
 
en volgende methodes:
  - printSpelregels -> print de spelregels van je spel
  - afrekenen -> geeft de prijs van het spel terug
  - stockAanvullen -> verhoogd de hoeveelheid in stock met 100

## Deel 2
Spel heeft een subklasse VideoSpel.VideoSpel heeft als extra eigenschappen
- console waar het op gespeeld kan worden (XBox, PlayStation, Computer)
- of het spel in cheatMode staat. CheatMode is een privé property.
- een maximum aantal levels (wanneer het spel uitgespeeld is)
- een huidig level.
Als extra methode heeft een VideoSpel 
- een levelUp methode. Deze methode aanroepen zorgt ervoor dat het huidige level met 1 wordt verhoogd. Het huidige level kan niet hoger zijn dan de maximum aantal levels.
- een spelUitgespeeld methode. Als cheatmode aanstaat geeft dit altijd true terug. Anders checkt het of het huidige level gelijk is aan het maximum aantal levels.
- zijn eigen methode van afrekenen. Deze methode gaat teruggeven dat de prijs betaald is via het internet.

## Deel 3
Spel heeft een subklasse GezelschapSpel
. GezelschapSpel heeft als extra eigenschappen
- een lijst (array) van onderdelen (mag om het simpel te houden een lijst van strings zijn)
- een minimumleeftijd
- een maximumleeftijd

Als extra methode heeft een GezelschapSpel:
- een printOnderdelen methode. Deze print een lijst van de onderdelen in het spel af.
- een bestelExtraOnderdelen methode. Bestel extra onderdelen voegt een onderdeel toe (bijvoorbeeld een kaartuitbreiding) aan de lijst van onderdelen.
- een geschiktVoorMij methode. Deze methode heeft als input een leeftijd en zegt of je de juiste leeftijd hebt voor het spel.