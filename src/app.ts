import express from 'express';
import cors from 'cors';
import { globalRoutes } from './app/routes/routes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: ['https://8zxvd8y1.forms.app/real-estate-contact-form'],
    credentials: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Hellow world');
});

app.use('/api/v1', globalRoutes);

export default app;
