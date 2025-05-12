import express from 'express';
const router = express.Router();
import db from './bancoDados.js'


router.delete('https://lista-de-tarefas-production-2ad9.up.railway.app/del/:id', async (req, res)=>{
    const id = (req.params.id);
    await deletaItem(id)
     res.status(200).json({ mensagem: 'Tarefa removida com sucesso'});
})



export default router;

async function  deletaItem(id) {
    return db.query(`DELETE FROM tarefas WHERE id = ?`, [id])
}