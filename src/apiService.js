const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '15932999-a5eed31b79b3cb2d90b9ac589';
export default {
  page: 1,
  query: '',
  fetchImages() {
    const params = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(baseUrl + params)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
