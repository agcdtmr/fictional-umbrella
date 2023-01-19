CLIMATIQ_API_KEY = "";

const baseURL = "https://beta3.api.climatiq.io";

const endpoint = new URL("search", baseURL);

const params = { year: "2022" };

endpoint.search = new URLSearchParams(params).toString();

fetch(endpoint, {
  method: "GET",
  headers: {
    Authorization: `Bearer: ${CLIMATIQ_API_KEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
