const apiUrl = "https://swapi.dev/api/people";

async function fetchData(category) {
  try {
    const response = await fetch(`https://swapi.dev/api/${category}`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data?.results);
    displayData(data?.results, category);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function displayData(data, category) {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = ""; // Clear any existing content

  data.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "data-item";

    if (category === "people") {
      const name = document.createElement("div");
      name.textContent = `Name: ${item.name}`;

      const eye_color = document.createElement("div");
      eye_color.textContent = `Eye Color: ${item.eye_color}`;

      const mass = document.createElement("div");
      mass.textContent = `Mass: ${item.mass}`;

      const height = document.createElement("div");
      height.textContent = `Height: ${item.height}`;

      const gender = document.createElement("div");
      gender.textContent = `Gender: ${item.gender}`;

      itemElement.appendChild(name);
      itemElement.appendChild(eye_color);
      itemElement.appendChild(mass);
      itemElement.appendChild(height);
      itemElement.appendChild(gender);
    } else if (category === "films") {
      const title = document.createElement("div");
      title.textContent = `title: ${item.title}`;

      const episode_id = document.createElement("div");
      episode_id.textContent = `episode id: ${item.episode_id}`;

      const director = document.createElement("div");
      director.textContent = `director: ${item.director}`;

      const release_date = document.createElement("div");
      release_date.textContent = `release_date: ${item.release_date}`;

      const producer = document.createElement("div");
      producer.textContent = `producer: ${item.producer}`;

      itemElement.appendChild(title);
      itemElement.appendChild(episode_id);
      itemElement.appendChild(director);
      itemElement.appendChild(release_date);
      itemElement.appendChild(producer);
    } else {
      const name = document.createElement("div");
      name.textContent = `title: ${item.name}`;

      const model = document.createElement("div");
      model.textContent = `episode id: ${item.model}`;

      const manufacturer = document.createElement("div");
      manufacturer.textContent = `director: ${item.manufacturer}`;

      const vehicle_class = document.createElement("div");
      vehicle_class.textContent = `release_date: ${item.vehicle_class}`;

      const passengers = document.createElement("div");
      passengers.textContent = `producer: ${item.passengers}`;

      itemElement.appendChild(name);
      itemElement.appendChild(model);
      itemElement.appendChild(manufacturer);
      itemElement.appendChild(vehicle_class);
      itemElement.appendChild(passengers);
    }

    dataContainer.appendChild(itemElement);
  });
}

document.getElementById("dataSelector").addEventListener("change", (event) => {
  fetchData(event.target.value);
});
fetchData("people");
