
var biblioteca = [
    {
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        estadoLectura: true
    },
    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        estadoLectura: true
    },
    {
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay: The Final Book of The Hunger Games',
        estadoLectura: false
    }
];


console.log("Estado de lectura de los libros:");
biblioteca.forEach(libro => {
    let estado = libro.estadoLectura ? "ya leído" : "pendiente de leer";
    console.log(`"${libro.titulo}" de ${libro.autor} está ${estado}.`);
});
