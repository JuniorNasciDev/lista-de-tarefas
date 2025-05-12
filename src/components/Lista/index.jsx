import React from "react";
import'./style.css'
import { useEffect,useState } from "react";

function Lista(){

    const [lista, setLista] = useState([])




    async function ListaD(){
        const response = await fetch ('lista-de-tarefas-production-2ad9.up.railway.app/pega/pega')
        const data = await response.json()
        setLista(data)
    }


 const editElement = async (element) => {
  // Pede o novo título e descrição através de prompts
  const novoTitulo = prompt('Novo título:', element.titulo); // Exibe o título atual como valor padrão
  const novaDescricao = prompt('Nova descrição:', element.descricao); // Exibe a descrição atual como valor padrão

  // Faz a requisição PUT para atualizar no backend
  const response = await fetch(`lista-de-tarefas-production-2ad9.up.railway.appedit/edit/${element.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: novoTitulo, // Usa o valor recebido no prompt
      descricao: novaDescricao // Usa o valor recebido no prompt
    })
  });

  const data = await response.json(); // Pega a resposta do backend
  console.log('Tarefa atualizada:', data); // Exibe a tarefa atualizada no console
};

const deleteS = async (element) => {
  
  const response = await fetch(`lista-de-tarefas-production-2ad9.up.railway.app/del/del/${element.id}`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json()
  console.log(data)


  ListaD()
}




    useEffect(()=>{
        ListaD()
    },[lista])


    return (
      <div className="box-lista">
        <h1>Lista de Tarefas</h1>
        <ul className="lista-tarefas">
          {lista.map((element, id) => (
            <li key={id} className="item-lista">
              <p className="title-item">{element.titulo}</p>
              <p className="text-item">
                {element.descricao.split("\n").map((linha, index) => (
                  <React.Fragment key={index}>
                    {linha}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <div className="box-btns">
                <button className="btn-item" onClick={()=>deleteS(element)}>apagar</button>
                <button className="btn-item" onClick={()=>editElement(element)}>editar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Lista;