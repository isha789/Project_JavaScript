//Este archivo se encarga de generar dinámicamente las tarjetas de películas.
// Recorre el array de películas y crea los elementos HTML necesarios.
// Implementa la función de búsqueda utilizando métodos de strings.
// Actualiza el contenido de la página según el texto introducido.
// Demuestra el uso de arrays, funciones y eventos en JavaScript.

const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("search");

// Show all movies initially
showMovies(movies);

// Display movies
function showMovies(list) {
  grid.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${movie.title}</h3>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Style:</strong> ${movie.style}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors}</p>
      <p><strong>Oscars:</strong> ${movie.oscars}</p>
    `;
    grid.appendChild(card);
  });
}

// Filter movies
function filterMovies() {
  const text = searchInput.value.toLowerCase();

  if (text === "") {
    showMovies(movies);
    return;
  }

  const filtered = movies.filter(movie =>
    Object.values(movie).some(value =>
      value.toString().toLowerCase().includes(text)
    )
  );

  showMovies(filtered);
}
