/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

document.getElementById("click_me").addEventListener("click", function () {
  function generateField(domElement, limit) {
    console.log(this);

    for (let i = 0; i < limit; i++) {
      const cellElement = document.createElement("div");
      cellElement.className = "cell";
      cellElement.append(i + 1);
      domElement.append(cellElement);
      cellElement.addEventListener("click", function () {
        this.classList.toggle("bg-blue");
        console.log(cellElement.innerText);
      });
    }
  }

  const fieldElement = document.querySelector(".filed");
  const limit = 100;
  generateField(fieldElement, limit);
  let click_me = document.getElementById("click_me");
  click_me.classList.add("d-none");
});
