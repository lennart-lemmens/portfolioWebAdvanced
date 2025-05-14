# Projectbeschrijving en functionaliteiten
Via deze webapp kunnen gegevens over videogames worden opgehaald. De gebruiker kan daarbij sorteren op alfabetische volgorde (oplopend en aflopend) en filteren op platform, genre en game mode. De gebruiker kan ook zoektermen ingeven. 

Bij elke zoekopdracht worden de resultaten in een lijst met vakken weergegeven. In elk vak staat de naam, de coverafbeelding en een lijst van alle platforms waarop de game te spelen is. De gebruiker kan elke game ook opslaan in zijn favorieten (in de local storage). Door op een vak te klikken, wordt er meer info weergegeven over de game: de platforms, de genres, de game modes en, indien beschikbaar, een beschrijving van het verhaal.

Bij elke zoekopdracht worden er telkens 100 resultaten opgehaald en weergegeven. Als de gebruiker naar onder scrollt tot het einde van de lijst, worden de volgende 100 resultaten opgehaald, indien die er zijn. In de navigatiebalk is er een knop om een lijst met enkel de favorieten te openen, en er is een knop om te wisselen tussen light en dark mode.

# Gebruikte API's met links
- [IGDB](https://api-docs.igdb.com/): videogame-API waarvan informatie over videogames kan worden opgehaald

# Implementatie van elke technisch vereiste
1. DOM manipulatie:  
- Elementen selecteren: **./client/src/constants/documentElements.js**
- Elementen manipuleren: **./client/src/main.js: lijn 21**
- Events aan elementen koppelen: **./client/src/main.js: lijn 22, 25, 26 ...**
2. Modern JavaScript:  
- Gebruik van constanten: **./client/src/constants/documentElements.js**
- Template literals: **./server/routes/lists.js: lijn 8**
- Iteratie over arrays: **./client/src/classes/resultlist.js: lijn 32-34**
- Array methodes: **./client/src/classes/game.js: lijn 49-64**
- Arrow functions: **./client/src/utils/darkmode.js: lijn 4, 15 en 23**
- Conditional (ternary) operator (moderne if..else): **./client/src/classes/game.js: lijn 25**
- Callback functions: **./client/src/main.js: lijn 21, 24, 25 ...**
- Promises: **zie Async & Await**
- Async & Await: **.server/controllers/requestData.js: lijn 24**
- Observer API (1 is voldoende): **./client/src/utils/addObserverElement.js: lijn 6-13**
3. Data & API:  
- Fetch om data op te halen: **.server/controllers/requestData.js: lijn 9 en 26**
- JSON manipuleren en weergeven: **./client/src/utils/requestGameData.js: lijn 18 en ./client/src/utils/generateResultList.js: lijn 7-10**
4. Opslag & validatie:  
- Formulier validatie: **./client/src/main.js: lijn 30 (.trim()-method)**
- Gebruik van LocalStorage: **./client/src/classes/game.js: lijn 51 en 63**
5. Styling & layout:  
- Basis HTML layout (flexbox of CSS grid kan hiervoor worden gebruikt): **./client/src/index.html**
- Basis CSS: **./client/src/styles**
- Gebruiksvriendelijke elementen (verwijderknoppen, icoontjes,...): **icoontjes voor favorieten toe te voegen, te verwijderen en weer te geven, schakelen tussen dark mode en light mode ... zie ./client/src/assets**
6. Tooling & structuur: 
- Project is opgezet met Vite
- Een correcte folderstructuur wordt aangehouden (gescheiden html, css en js files, src folder, dist folder, ...)

# Installatiehandleiding
### De repository clonen en de nodige bestanden binnenhalen

1. Klik op de [Githubpagina](https://github.com/lennart-lemmens/portfolioWebAdvanced) op de groene knop 'Code', kies HTTPS en kopieer de url.
2. Open de command line of de terminal van je IDE, navigeer naar de map waar je het project wilt kopiëren en geef de volgende command in met de url die je net hebt gekopieerd:

```
git clone https://github.com/lennart-lemmens/portfolioWebAdvanced.git
```

3. Druk op enter.
4. Navigeer naar de map 'client' en typ 'npm install':

```
cd client
npm install
```

5. Open een tweede terminal, navigeer naar de map 'server' en typ 'npm install':

```
npm install
```

### De webapp openen

1. Typ de volgende code in de terminal waar de map 'client' openstaat:

```
npm run dev
```

2. Typ de volgende code in de terminal waar de map 'server' open staat:

```
npm run start
```

3. Open je browser en typ het volgende in het url-vak:

```
http://localhost:5173/
```

# Screenshots van de applicatie
### Startpagina
<img src="https://github.com/user-attachments/assets/37d46cf9-7153-4545-9e4e-fb3712c0d028" width="500">

### Zoekopdracht
<img src="https://github.com/user-attachments/assets/01ea86f4-a4a7-46e7-b03e-10120fd6a42f" width="500">

### Dark mode
<img src="https://github.com/user-attachments/assets/24bae5a9-3eda-4a73-8030-4469dd6b2bc0" width="500">

### Favorieten
<img src="https://github.com/user-attachments/assets/92cc1d9e-ccf0-4db6-864a-eed3bb2e266c" width="500">

### Lijst met platforms
<img src="https://github.com/user-attachments/assets/0827d505-bc55-4283-986d-ea2735496fdd" width="500">

### Pagina met meer info over game
<img src="https://github.com/user-attachments/assets/adce71e8-4c57-4b9d-85c2-1cef28ecffb6" width="500">

### Mobiele weergave
<img src="https://github.com/user-attachments/assets/9c397383-6301-47ae-8668-074b68b611b6" width="200">

# Gebruikte bronnen
- https://api-docs.igdb.com/#getting-started: uitleg over API en inhoud fetch requests
- https://www.codecademy.com/enrolled/courses/learn-express: uitleg over werking backend in Express
- https://www.svgrepo.com: SVG-icoontjes
- https://www.w3schools.com/css/css_tooltip.asp: hoe toon ik een tooltip wanneer ik mijn muis ever een icoontje beweeg
- https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/: hoe vermijd ik dat autocomplete de kleur van mijn input-element verandert
- https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp: hoe zorg ik dat de "enter"-toets hetzelfde doet als de search-knop wanneer mijn cursor in de zoekbalk staat
- https://www.freecodecamp.org/news/how-does-the-javascript-sort-function-work: hoe sorteer ik objecten in een array op naam
- https://medium.com/@oadaramola/a-pitfall-i-almost-fell-into-d1d3461b2fb8: gebruik van .env-bestand
