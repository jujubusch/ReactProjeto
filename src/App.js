import { useEffect, useState } from "react";
import "./global.css"

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "", status: "" } );

  function AddTarefa()
  {
    if( tarefa.texto !== "" ) {
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }

  function ExcluirTarefa( id )
  {
      const novaLista = listaTarefas.filter( (tarefa ) => tarefa.id !== id );
      setListaTarefas( novaLista );
  }

  function StatusTarefa( id, status )
  {
      const index = listaTarefas.findIndex( (tarefa) => tarefa.id ===id );
      listaTarefas[index].status = !status;
      setListaTarefas( [...listaTarefas ] );
  }

  useEffect( () => {
     setTarefa( { id: "" , texto: "" } );
  }, [ listaTarefas ] )

  return (
    <>
      <header className="titulo">
        <h1>Sua Lista de Tarefas</h1>
      </header>
      <div className="pesquisa">
        <input className="Caixa-texto" type="text" name="Tarefas" placeholder="Adicionar Tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false} ) }/>
        <button className="AddBotao" onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul className="Lista">
          {listaTarefas.map( (item, index ) => (
            <li className={item.status ? 'Ativo' : 'Cancelar'} key={item.id}>{item.texto} <i className={item.status ? 'fa fa-square-o' : 'fa fa-check-square-o'}   aria-hidden="true" onClick={ () => StatusTarefa(item.id, item.status) }></i> <i class="fa fa-trash" aria-hidden="true" onClick={ () => ExcluirTarefa(item.id) }></i></li>
          ))}
           <button className="Final">Finalizar</button>
        </ul>
      </div>
    </>
  );
} 
export default App;