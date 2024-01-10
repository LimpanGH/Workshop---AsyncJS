// https://daily-raja-0a3.notion.site/1-Fetch-data-fr-n-ett-API-d9f5eb3ee8104d13a3003ccfe210d473

// 1. Fetch data från ett API
/* 
- Använd fetch för att göra en förfrågan till https://jsonplaceholder.typicode.com/posts.
- Använd .then() för att konvertera svaret till JSON.
- Använd en annan .then() för att logga ut JSON-data i konsolen.
- Lägg till en .catch() för att fånga och logga eventuella fel. 
*/


// 2. Felhantering i fetch
/* Uppgift: Gör en **fetch**förfrågan till JSONPlaceholder's Comments API, konvertera svaret till JSON, och hantera felaktigt JSON-format och nätverksfel med ett throw new Error och en catch.

Instruktioner:
- Använd fetch för att hämta data från https://jsonplaceholder.typicode.com/comments.
- Använd .then() för att kontrollera om svaret är OK och konvertera det till JSON.
- Logga ut JSON-data i konsolen.
- Hantera fel både i nätverksförfrågan och JSON-parsning. 
*/

// 3. Använd Promise.all
/* Uppgift: Gör parallella **fetch**förfrågningar till JSONPlaceholder's Posts och Comments API med Promise.all och hantera alla svar samtidigt.

Instruktioner:
- Skapa två **fetch**förfrågningar: en till Posts och en till Comments.
- Använd Promise.all för att hantera båda förfrågningarna samtidigt.
- Logga ut båda svaren när de är tillgängliga.
- Använd .catch() för att hantera eventuella fel.*/ 

// 4. Kedja Promises
/* Uppgift: Skapa en sekvens av asynkrona operationer för att först hämta en användare från JSONPlaceholder's Users API, sedan hämta deras inlägg.

Instruktioner:
- Använd fetch för att hämta en specifik användare (t.ex. användare med id 1).
- Använd .then() för att hämta användarens inlägg baserat på användar-ID.
- Logga ut användarens data och deras inlägg.
- Hantera eventuella fel som kan ske på vägen med en catch i slutet.*/


// 5. Async/Await med Felhantering
/* Uppgift: Skriv en asynkron funktion som hämtar en användares inlägg och hanterar fel med try-catch.

Instruktioner:
- Skapa en asynkron funktion fetchUserPosts.som tar emot ett användarid som argument (t.ex. 1).
- Använd try-catch med en throw för att hantera fel under **fetch**förfrågan.
- Använd await för att vänta på användarens inlägg.
- Logga ut inläggen eller felmeddelandet.
*/


// 6. Skapa ett asynkront kontrollflöde
/* Uppgift: Skriv en asynkron funktion som hämtar en användares inlägg och hanterar fel med try-catch.

Instruktioner:
- Skapa en asynkron funktion fetchUserPosts.som tar emot ett användarid som argument (t.ex. 1).
- Använd try-catch med en throw för att hantera fel under **fetch**förfrågan.
- Använd await för att vänta på användarens inlägg.
- Logga ut inläggen eller felmeddelandet.
*/
