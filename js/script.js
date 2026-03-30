const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=dogs&limit=12";
async function fetchGifs() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Extract image URLs
    const images = data.data.map(gif => gif.images.original.url);

    console.log(images); // Preview in console
    return images;

  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
}
const button = document.querySelector("#fetch-btn");
const gifContainer = document.querySelector("#gif-container");
button.addEventListener("click", async () => {
  gifContainer.innerHTML = ""; // clear old gifs

  const images = await fetchGifs();

  images.forEach(url => {
    gifContainer.innerHTML += `
      <img src="${url}" class="col-3 mb-3">
    `;
  });
});
