// fetchApi.js
const BASE_URL = 'https://api.unsplash.com';
const API_KEY = '2mpZYpCdIUAXnJRYixr97YrEbsqcFl5qHSauozapnMk';

const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    const url = new URL(`${BASE_URL}/search/photos`);
    const params = {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON response from Unsplash API');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
};

export { fetchImages };
