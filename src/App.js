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
      <div>
        <input type="text" name="Tarefas" placeholder="Adicionar Tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false} ) }/>
        <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listaTarefas.map( (item, index ) => (
            <li key={item.id}>{item.texto} <button onClick={ () => StatusTarefa(item.id, item.status) }>{item.status ? 'Concluido' : 'Não Concluido' }</button> <button onClick={ () => ExcluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;