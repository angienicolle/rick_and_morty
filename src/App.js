import './App.css';
import Cards from './components/ComponenteCards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import { useState } from 'react';
import axios from 'react'


function App() {
   
   const [characters,setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id)=>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id);
         })
      )
   };

   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
