import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import admin from './routes/admin'
import auth from './routes/auth'
import themes from './routes/themes'
import cases from './routes/cases'

dotenv.config();
const app = express();

//settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH,  DELETE"
    );
    res.header("Allow", "GET, POST, OPTIONS, PATCH, DELETE");
    app.use(cors());
    next();
});

app.use('/api', admin)
app.use('/api', auth)
app.use('/api', themes)
app.use('/api', cases)

export default app;