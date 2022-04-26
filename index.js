import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import productRoutes from './routes/routes.js';
import router from "./routes/routes.js";

const app = express()

app.use(cors());
app.use(express.json());
app.use(router)

try {
    await db.authenticate()
    console.log('conexión exitosa')
} catch (error) {
    console.log(`error: ${error}`)
}

app.listen(process.env.PORT, ()=>{
    console.log('server running in http://localhost:8000/')
})