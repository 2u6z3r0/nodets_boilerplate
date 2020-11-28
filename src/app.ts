import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to build together');
});

app.listen(port, () => console.log(`server started on ${port}`));
const name = 'pretty';
console.log(name);
console.log('welcome to backend server');
