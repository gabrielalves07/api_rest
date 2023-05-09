import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`\nExecutando no endereço: http://localhost:${port}`);
});
