//Este archivo contiene la información de las películas en formato de objetos JavaScript.
//Cada película incluye datos como título, año, género, director y premios.
//Los datos se almacenan en un array para facilitar su recorrido.
//Este archivo se utiliza como fuente de datos para la página de películas.
//Permite separar los datos de la lógica del programa.

// Movie data used by pelis.html + pelis.js
// You can add/remove movies freely as long as you keep the same keys.


 /*
  File: infopelis.js
  Description: Movie data used for dynamic content generation
*/

const movies = [
  {
    title: "Blade Runner 2049",
    year: 2017,
    style: "Sci-Fi",
    director: "Denis Villeneuve",
    actors: "Ryan Gosling, Harrison Ford, Ana de Armas",
    oscars: 2
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    style: "Action",
    director: "George Miller",
    actors: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    oscars: 6
  },
  {
    title: "La La Land",
    year: 2016,
    style: "Musical",
    director: "Damien Chazelle",
    actors: "Ryan Gosling, Emma Stone",
    oscars: 6
  },
  {
    title: "The Social Network",
    year: 2010,
    style: "Drama",
    director: "David Fincher",
    actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    oscars: 3
  },
  {
    title: "No Country for Old Men",
    year: 2007,
    style: "Thriller",
    director: "Joel Coen, Ethan Coen",
    actors: "Javier Bardem, Josh Brolin, Tommy Lee Jones",
    oscars: 4
  },
  {
    title: "Her",
    year: 2013,
    style: "Drama",
    director: "Spike Jonze",
    actors: "Joaquin Phoenix, Scarlett Johansson",
    oscars: 1
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    style: "Comedy",
    director: "Wes Anderson",
    actors: "Ralph Fiennes, Tony Revolori, Saoirse Ronan",
    oscars: 4
  },
  {
    title: "Django Unchained",
    year: 2012,
    style: "Western",
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
    oscars: 2
  },
  {
    title: "Arrival",
    year: 2016,
    style: "Sci-Fi",
    director: "Denis Villeneuve",
    actors: "Amy Adams, Jeremy Renner",
    oscars: 1
  },
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    style: "Drama",
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    oscars: 0
  },
  {
    title: "Black Swan",
    year: 2010,
    style: "Thriller",
    director: "Darren Aronofsky",
    actors: "Natalie Portman, Mila Kunis",
    oscars: 1
  },
  {
    title: "Logan",
    year: 2017,
    style: "Action",
    director: "James Mangold",
    actors: "Hugh Jackman, Patrick Stewart, Dafne Keen",
    oscars: 0
  }
];
