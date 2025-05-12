
import express from 'express';
import cors from 'cors';
const app = express();

// Middlewares
app.use(cors({
    origin: '*', // Substitua pela URL do seu front-end
}));
app.use(express.json());

// Importa as rotas
import addRoutes from './routes/add.js';
import getRoutes from './routes/get.js';
import editRoutes from './routes/edit.js';
import delRoutes from './routes/delete.js'

// Usa as rotas
app.use('/add', addRoutes);
app.use('/pega', getRoutes);
app.use('/edit', editRoutes);
app.use('/del', delRoutes)


// Inicia o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});