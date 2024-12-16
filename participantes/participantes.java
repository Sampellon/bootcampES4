let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

console.log ("Clasificacion actual", participantes);

let indexLaura = participantes.indexOf ("Laura");
let indexJavier = participantes.indexOf ("Javier");
[participantes[indexLaura], participantes[indexJavier]]=[participantes[indexJavier], participantes[indexLaura]];

let indexPatricia = participantes.indexOf("Patricia");
participantes.splice(indexPatricia, 1);

let indexCarlos = participantes.indexOf("Carlos");
participantes.splice (indexCarlos, 0, "Raúl", "Sofia");

participantes.unshift("Carmen");

console.log ("Clasificación actualizada:",participantes");
