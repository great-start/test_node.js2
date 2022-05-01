import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

import {PORT, DB_PATH} from './constants/config.js';
import {moviesRouter} from './Router/moviesRouter.js';


const app = express();

app.use(fileUpload({}));
app.use(express.static('pictures'));
app.use(express.json());
app.use(moviesRouter);

app.get('*', (req, res) => {
    res.status(200).json('Page not found');
});

app.listen(PORT, async () => {
    try {
        await mongoose.connect(DB_PATH);
    } catch (e) {
        console.log(e.message);
    }
    console.log('Server has started at port 5200');
});
