import render from './render.js';

const refs = {
  apiKey: '15932999-a5eed31b79b3cb2d90b9ac589',
  serchRequest: 'cars',
  page: 1,
};

export default function fetchImages() {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${refs.serchRequest}&page=${refs.page}&per_page=12&key=${refs.apiKey}`,
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      render(data.hits);
    });
}
