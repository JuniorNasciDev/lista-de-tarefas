import express from 'express';
const router = express.Router();
import db from '../routes/bancoDados.js'
import { v4 as uuidv4 } from 'uuid'



router.post('https://lista-de-tarefas-production-2ad9.up.railway.app/add', async (req, res)=>{
    const {titulo, descricao} = req.body
    const novaTarefa = {
        id: uuidv4(),
        titulo,
        descricao
    };

    console.log('adicionou')
    await registraNoBanco(novaTarefa)
    res.status(201).json(novaTarefa)
})


async function registraNoBanco(tarefa){
 await db.query('INSERT INTO tarefas (id, titulo, descricao) VALUES (?, ?, ?)',[tarefa.id,tarefa.titulo,tarefa.descricao])
console.log('Tarefas atuais:', db); // Apenas para debug
}
export default router;