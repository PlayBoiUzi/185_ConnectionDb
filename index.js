import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(
    express.urlencoded(
        { extended: true,

         }))

const pool = new Pool({
    user: 'postgres',
    host : 'localhost',
    database: 'mahasiswa',
    password: '1010',
    port: 5432,
})

app.get('/', (req, res) => {
    res.send("Test Data :");
    pool.query('Select * from Biodata')
    .then(TestData => {
        console.log(TestData)
        res.send(TestData.rows);
    