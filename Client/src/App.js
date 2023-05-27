import './App.css';
import Cards from '.././../Client/src/components/ComponenteCards/Cards';
import NavBar from '.././../Client/src/components/NavBar/NavBar'
import Detail from '.././../Client/src/components/ComponenteDetail/Detail'
import About from '.././../Client/src/components/ComponenteAbout/About'
import { useState,useEffect } from 'react';
import axios from 'react'
import {Routes , Route} from 'react-router-dom'
// import React from 'react';


function App() {
   
   useEffect(()=>{
      !access && Navigate('/');
   },[access]);

   const [characters,setCharacters] = useState([]) //creando un estado

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
         {pathname !== '/' && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes> 
      </div>
   );
}

export default App;
