let random = Math.floor(Math.random() * 41);
console.log(random);

fetch("frasi.json")
  .then((response) => response.json())
  .then((json) => {
    let frase = JSON.stringify(json.frasi[random].frase);
    let autore = json.frasi[random].autore;
    console.log(frase);
    console.log(autore);
    document.getElementById("frase").innerText = frase;
    document.getElementById("autore").innerText = autore;
  })
  .catch((error) => console.log("Oh oh, problema"));
