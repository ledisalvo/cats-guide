const baseUrl = 'https://api.thecatapi.com/v1/';
const headers = { 'x-api-key': import.meta.env.VITE_CAT_API_KEY };

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
