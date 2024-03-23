const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Obtener los datos de la respuesta
    console.log(data);
    $n.textContent = data.name; // Utilizar interpolación de cadena con backticks
    $b.textContent = data.blog; // Utilizar interpolación de cadena con backticks
    $l.textContent = data.location; // Utilizar interpolación de cadena con backticks
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Utilizar interpolación de cadena con backticks
}

async function fetchUserData() {
  await displayUser('stolinski');
}

fetchUserData(); // Llamar a la función para iniciar la carga de datos