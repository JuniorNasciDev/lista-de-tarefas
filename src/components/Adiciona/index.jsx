import React from "react";
import './style.css'
import { useState } from "react";





function Adiciona(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

        const addAgora = async () => {
        try {
            const response = await fetch('lista-de-tarefas-production-2ad9.up.railway.app/add/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo,
                    descricao
                })
            });

            const data = await response.json();
            console.log('Tarefa enviada:', data);

            // Limpa os campos após enviar
            setTitulo('');
            setDescricao('');
        } catch (error) {
            console.error('Erro ao enviar tarefa:', error);
        }
    };

    return(
        <div className="page-entry">
            <h1 className="title">Adicionar tarefas</h1>
            <div className="box-entry">
                <input
                    type="text"
                    className="title-entry"
                    placeholder="Título da tarefa"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea
                    type="text"
                    className="desc-entry"
                    placeholder="Descrição da tarefa"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button className="adicionar" onClick={addAgora}> Adicionar</button>
            </div>
        </div>
    )
}

export default Adiciona;