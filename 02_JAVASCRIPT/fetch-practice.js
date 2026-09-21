const fetchButton = document.querySelector("#contactButton");
const fetchMessage = document.querySelector("#formMessage");
fetchButton.addEventListener("click", function (event) {
  event.preventDefault();

  fetchMessage.textContent = "Loading...";
  getUser();
});
async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    fetchMessage.textContent = `Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company.name}`;
  } catch (error) {
    fetchMessage.textContent = error.message;
}
  }

