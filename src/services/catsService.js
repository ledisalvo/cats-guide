const baseUrl = 'https://api.thecatapi.com/v1/';
const headers = { 'x-api-key': 'c2db22b7-52b8-4f16-82db-c0cbb4d39136' };

export async function getDailyCat() {
  const response = await fetch(baseUrl + 'images/search', { headers });
  if (response.ok) return response.json();
  throw response;
}

export async function getCatBreeds() {
  const response = await fetch(baseUrl + 'breeds', { headers });
  if (response.ok) return response.json();
  throw response;
}
