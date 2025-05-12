import express from 'express';
const router = express.Router()
import db from '../routes/bancoDados.js'




router.get('/pega', async (req, res)=>{
    res.status(200).json(await getDados())
})

export default router;


async function getDados(){
    const [lista] = await db.query('SELECT * FROM tarefas;')
    return lista
}