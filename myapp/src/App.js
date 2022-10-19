import { useState } from "react";
import './App.css';
import { db } from "./firebaseConnection";




function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  function handleAdd() {
    alert("TESTE")
  }

  

  return (
    <div className="App">
      <h1>React + Firebase</h1>
        <div className='container'>
          <label>Titulo: </label>
          <textarea type="text" 
          placeholder='Digite o título'  
          onChange={(e) => setTitulo(e.target.value)}/>
          <label>Autor: </label>
          <input type="text" 
          placeholder='Digite o autor' 
          onChange={(e) => setAutor(e.target.value)}/>
          <button onClick={handleAdd}>Cadastrar</button> 

        </div>
    </div>
  );
}

export default App;
