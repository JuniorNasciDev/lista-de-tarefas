import express from 'express';
const router = express.Router();

import db from './bancoDados.js'


router.put('https://lista-de-tarefas-production-2ad9.up.railway.app/edit/:id', async (req,res)=>{
const id = (req.params.id);
const {titulo, descricao} = req.body;

const [tarefa] = await db.query('SELECT * FROM tarefas WHERE id=?',[id])

if (titulo !== undefined) tarefa.titulo = titulo;
if (descricao !== undefined) tarefa.descricao = descricao;

await db.query('UPDATE tarefas SET titulo = ?, descricao = ? WHERE id = ?', [tarefa.titulo, tarefa.descricao, id]);


res.json(tarefa)
})


export default router;


