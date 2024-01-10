# Workshop---AsyncJS
Chas,  avancerad webbutveckling

# Workshop - AsyncJS

I dessa workshops får vi prova olika asynkronaJS funktioner och även arbeta med felhantering i dessa.

I uppgifterna använder vi **`https://jsonplaceholder.typicode.com/`** som api för att hämta data men ni får även använda ett annat api om ni vill, se exempel:

[Förslag på API:er till workshopen](https://www.notion.so/F-rslag-p-API-er-till-workshopen-652fdd2b51d4430f9539927ae9dc865a?pvs=21)

Ni hittar Lösningsexempel till varje övning men sitt gärna och försök själva först. Det finns ett värde i att sitta fast och träna programmeringshjärnan även om det kan vara frustrerande i stunden. Ju mer vi gör detta, desto mindre frustration kommer vi behöva uthärda i framtiden. Det är enda vägen dit!

Vi gör alla vårt bästa och kommer alla utvecklas. Vi behöver inte jämföra oss med andra utan fokusera på vår egen utveckling främst!



## Övningar

[1. **Fetch data från ett API**](https://www.notion.so/1-Fetch-data-fr-n-ett-API-d9f5eb3ee8104d13a3003ccfe210d473?pvs=21)

[2. Felhantering i fetch](https://www.notion.so/2-Felhantering-i-fetch-003b34e38a90409396bcfeeaab74fe0f?pvs=21)

[3. Använd Promise.all](https://www.notion.so/3-Anv-nd-Promise-all-084a08f08ee94948abb6e91bef3d83d2?pvs=21)

[4. **Kedja Promises**](https://www.notion.so/4-Kedja-Promises-b77a8573c5bc4815b1418751c67d53e1?pvs=21)

[5. **Async/Await med Felhantering**](https://www.notion.so/5-Async-Await-med-Felhantering-dc815e01e9e447808ce7f13491413994?pvs=21)

[6. **Skapa ett asynkront kontrollflöde**](https://www.notion.so/6-Skapa-ett-asynkront-kontrollfl-de-86fdc4b01f3047d0bb44162ee609fc39?pvs=21)


# 1. **Fetch data från ett API**

- **Uppgift**: Använd **`fetch`** för att hämta data från JSONPlaceholder's Posts API och visa resultatet i konsolen.
- **Instruktioner**:
    1. Använd **`fetch`** för att göra en förfrågan till **`https://jsonplaceholder.typicode.com/posts`**.
    2. Använd **`.then()`** för att konvertera svaret till JSON.
    3. Använd en annan **`.then()`** för att logga ut JSON-data i konsolen.
    4. Lägg till en **`.catch()`** för att fånga och logga eventuella fel.
    
    [Lösningsexempel](https://www.notion.so/L-sningsexempel-6bdfec5d33d64e54ae8cd866580c5910?pvs=21)

# 2. Felhantering i fetch

- **Uppgift**: Gör en **`fetch`**förfrågan till JSONPlaceholder's Comments API, konvertera svaret till JSON, och hantera felaktigt JSON-format och nätverksfel med ett **`throw new Error`** och en **`catch`.**
- **Instruktioner**:
    1. Använd **`fetch`** för att hämta data från **`https://jsonplaceholder.typicode.com/comments`**.
    2. Använd **`.then()`** för att kontrollera om svaret är OK och konvertera det till JSON.
    3. Logga ut JSON-data i konsolen.
    4. Hantera fel både i nätverksförfrågan och JSON-parsning.

[Lösningsexempel](https://www.notion.so/L-sningsexempel-c34d1b88220548d880621f98fc28f014?pvs=21)

# 3. Använd Promise.all

- **Uppgift**: Gör parallella **`fetch`**förfrågningar till JSONPlaceholder's Posts och Comments API med **`Promise.all`** och hantera alla svar samtidigt.
- **Instruktioner**:
    1. Skapa två **`fetch`**förfrågningar: en till Posts och en till Comments.
    2. Använd **`Promise.all`** för att hantera båda förfrågningarna samtidigt.
    3. Logga ut båda svaren när de är tillgängliga.
    4. Använd **`.catch()`** för att hantera eventuella fel.

[Lösningsexempel](https://www.notion.so/L-sningsexempel-bc78a7457b6b4cb99248b8e4cb9802f3?pvs=21)

# 4. **Kedja Promises**

- **Uppgift**: Skapa en sekvens av asynkrona operationer för att först hämta en användare från JSONPlaceholder's Users API, sedan hämta deras inlägg.
- **Instruktioner**:
    1. Använd **`fetch`** för att hämta en specifik användare (t.ex. användare med id 1).
    2. Använd **`.then()`** för att hämta användarens inlägg baserat på användar-ID.
    3. Logga ut användarens data och deras inlägg.
    4. Hantera eventuella fel som kan ske på vägen med en catch i slutet.

[Lösningsexempel](https://www.notion.so/L-sningsexempel-3cb854177c8c419f93361868bcbf0aed?pvs=21)

# 5. **Async/Await med Felhantering**

- **Uppgift**: Skriv en asynkron funktion som hämtar en användares inlägg och hanterar fel med **`try-catch`**.
- **Instruktioner**:
    1. Skapa en asynkron funktion **`fetchUserPosts`**.som tar emot ett användarid som argument (t.ex. 1).
    2. Använd **`try-catch`** med en **`throw`** för att hantera fel under **`fetch`**förfrågan.
    3. Använd **`await`** för att vänta på användarens inlägg.
    4. Logga ut inläggen eller felmeddelandet.
    
    [Lösningsexempel](https://www.notion.so/L-sningsexempel-329ebdb470e046b6a811beaf1df9b45d?pvs=21)

# 6. **Skapa ett asynkront kontrollflöde**

- **Uppgift**: Bygg en funktion som hämtar en användare och baserat på användarens data, hämtar antingen deras inlägg eller deras album.
- **Instruktioner**:
    1. Skapa en asynkron funktion som först hämtar en användare.
    2. Baserat på en villkorlig logik (t.ex. om användarens ID är udda eller jämnt), hämta antingen användarens inlägg eller album.
    3. Logga ut användarens data och antingen deras inlägg eller album.
    4. Använd **`try-catch`** för att hantera fel.
    
    [Lösningsexempel](https://www.notion.so/L-sningsexempel-93a64fa3e1eb49a0badf0adf44953768?pvs=21)