import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: true });
});

app.listen(3333, () => {
  console.log('Server is running at http://127.0.0.1/3333');
});
