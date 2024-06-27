import express from 'express';
import connection from './database/db.js';
import cors from 'cors';
import route from './routes/route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', route);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/dist')));

app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, './client/dist/index.html'), function (err) {
    res.status(500).send(err);
  });
});

const PORT = process.env.PORT || 8000;

connection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
