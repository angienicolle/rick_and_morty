import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () =>{
    const {id} = useParams()
    //creando un estado con su funcion seteadora
    const [character,SetCharacter] = useState({})

    //controla el ciclo de vida de montaje tiene dos parametros el primero un cb y el segundo un array
    useEffect(()=> {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         SetCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return SetCharacter({});
}, [id]);
    
   
    return(
        <div>
            {
                character.name ?
                (<>
                <h3>nombre:{character.name}</h3>
                <h3> status {character.status}</h3>
                <h3> species {character.species}</h3>
                <h3> gender {character.gender}</h3>
                <h3> origin {character.origin}</h3>
                <img src={character.image} alt="" />
                </>)
                :
                <h3>Loading...</h3>
            }
        
        </div>
    )
}

export default Detail;