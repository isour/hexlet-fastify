import fastify from 'fastify';

const app = fastify();
const port = 3000;

app.get('/hello', (req, res) => {
  const { name } = req.query;
  res.send(`Hello, ${name}!`);
});

app.post('/users', (req, res) => {
  res.send('POST /users');
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
