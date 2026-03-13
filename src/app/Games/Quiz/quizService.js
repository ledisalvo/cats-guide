const BASE_URL = 'https://api.thecatapi.com/v1/';
const HEADERS = { 'x-api-key': 'c2db22b7-52b8-4f16-82db-c0cbb4d39136' };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function buildQuizQuestions() {
  const [imagesRes, breedsRes] = await Promise.all([
    fetch(`${BASE_URL}images/search?limit=50&has_breeds=1`, { headers: HEADERS }),
    fetch(`${BASE_URL}breeds`, { headers: HEADERS }),
  ]);

  const images = await imagesRes.json();
  const allBreeds = await breedsRes.json();
  const allBreedNames = allBreeds.map((b) => b.name);

  const seen = new Set();
  const unique = [];
  for (const img of images) {
    if (!img.breeds?.length) continue;
    const breedId = img.breeds[0].id;
    if (!seen.has(breedId)) {
      seen.add(breedId);
      unique.push(img);
    }
    if (unique.length === 10) break;
  }

  return unique.map((img) => {
    const correctAnswer = img.breeds[0].name;
    const wrongOptions = shuffle(allBreedNames.filter((n) => n !== correctAnswer)).slice(0, 3);
    return {
      imageUrl: img.url,
      correctAnswer,
      funFact: img.breeds[0].description || null,
      options: shuffle([correctAnswer, ...wrongOptions]),
    };
  });
}
