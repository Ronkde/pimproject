# Personal Inventory Management

## Vaatimukset

- Node.js 14.0.0 tai uudempi
- npm 6.0.0 tai uudempi
- Git

## Kuinka (ehkä) saada toimimaan omalla koneella?

1. Asenna Git, jos sitä ei ole jo asennettu:
   [https://git-scm.com/downloads](https://git-scm.com/downloads)

2. Asenna Node.js, jos sitä ei ole jo asennettu:
   [https://nodejs.org/](https://nodejs.org/)

3. Navigoi VSCODEssa sinne mihin haluat pimproject kansion, jos kirjoitat terminaaliin esim "cd E:/random_bullshit" niin projektin sijainti tulee olemaan "E:/random_bullshit/pimproject"

4. VSCODE terminaaliin:
   ```sh
   git clone https://github.com/Ronkde/pimproject.git  

5. Navigoi kansioon /pimproject VSCODEssa. Varmista, että olet oikeassa kansiossa klikkaamalla "Explorer" välilehteä, siellä pitäisi näkyä PIMPROJECT, node_modules, public, src yms skeidaa. Myös terminaalissa pitäisi näkyä viimeisimpänä esim. "E:/random_bullshit/pimproject"

6. VSCODE terminaaliin:
   ```sh
   npm install
   npm run dev

Terminaalissa pitäisi näkyä: http://localhost:XXXX/

7. Selaimella osoitteeseen: http://localhost:XXXX ja badabim badabum