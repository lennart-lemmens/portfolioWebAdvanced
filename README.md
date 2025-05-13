# Projectbeschrijving en functionaliteiten

# Gebruikte API's met links
- [IGDB](https://api-docs.igdb.com/): videogame-API waarvan informatie over videogames kan worden opgehaald, al dan niet op basis van platform, uitgever, genre ...

# Implementatie van elke technisch vereiste (waar in de code?/lijnnummer)
1. DOM manipulatie:  
- Elementen selecteren: ./client/src/constants/documentElements.js
- Elementen manipuleren: meerdere plekken in de code, bijv. ./client/src/main.js
- Events aan elementen koppelen: ./client/src/main.js: meerdere event listeners (bijv. favoritesButton, darkmodeButton, searchButton ...)
2. Modern JavaScript:  
- Gebruik van constanten: quasi overal in de code, bijv. ./client/src/constants/documentElements.js
- Template literals: meerdere plekken in de code, bijv. ./server/routes/lists.js: lijn 8
- Iteratie over arrays: ./client/src/classes/resultlist.js: lijn 32-34
- Array methodes: ./client/src/classes/game.js: lijn 49-64
- Arrow functions: quasi overal in de code, bijv. ./client/src/utils/darkmode.js: lijn 4, 15 en 23
- Conditional (ternary) operator (moderne if..else): meerdere plekken in de code, bijv. ./client/src/classes/game.js: lijn 25
- Callback functions: ./client/src/main.js: lijn 21, 24, 25 ...
- Promises
- Async & Await: .server/controllers/requestData.js: lijn 24
- Observer API (1 is voldoende)
3. Data & API:  
- Fetch om data op te halen: meerdere plekken in de code, bijv. .server/controllers/requestData.js: lijn 9 en 26
- JSON manipuleren en weergeven: ./client/src/utils/requestGameData.js: lijn 18 en ./client/src/utils/generateResultList.js: lijn 7-10
4. Opslag & validatie:  
- Formulier validatie
- Gebruik van LocalStorage: ./client/src/classes/game.js: lijn 51 en 63
5. Styling & layout:  
- Basis HTML layout (flexbox of CSS grid kan hiervoor worden gebruikt): ./client/src/index.html
- Basis CSS: alles bestanden in ./client/src/styles
- Gebruiksvriendelijke elementen (verwijderknoppen, icoontjes,...): icoontjes voor favorieten toe te voegen, te verwijderen en weer te geven, schakelen tussen dark mode en light mode ...
6. Tooling & structuur: 
- Project is opgezet met Vite
- Een correcte folderstructuur wordt aangehouden (gescheiden html, css en js files, src folder, dist folder, ...)

# Installatiehandleiding

# Screenshots van de applicatie

# Gebruikte bronnen (inclusief AI chatlog)
- [https://api-docs.igdb.com/#getting-started]: uitleg over API en fetch requests
- [https://www.codecademy.com/enrolled/courses/learn-express]: uitleg over werking backend in Express
- [https://www.svgrepo.com/]: SVG-icoontjes
- [https://www.w3schools.com/css/css_tooltip.asp]: hoe toon ik een tooltip wanneer ik mijn muis ever een icoontje beweeg
- [https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/]: hoe vermijd ik dat autocomplete de kleur van mijn input-element verandert
- [https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp]: hoe zorg ik dat de "enter"-toets hetzelfde doet als de search-knop wanneer mijn cursor in de zoekbalk staat
- [https://www.freecodecamp.org/news/how-does-the-javascript-sort-function-work/]: hoe sorteer ik objecten in een array op naam
