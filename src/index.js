import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Catalog from "./catalog/index.js";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    }
));
app.use(bodyParser.json());

app.use('/france-images', express.static(path.join(__dirname,'store/jpg/catalog/france')));
app.use('/german-images', express.static(path.join(__dirname,'store/jpg/catalog/german')));
app.use('/england-images', express.static(path.join(__dirname,'store/jpg/catalog/england')));

console.log(path.join(__dirname,'src/store/jpg/catalog/france'))

app.get('/france', (req, res) => {
    res.status(200).json(Catalog.France());

});
app.get('/england', (req, res) => {
    res.status(200).json(Catalog.England());
});
app.get('/german', (req, res) => {
    res.status(200).json(Catalog.German());
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
