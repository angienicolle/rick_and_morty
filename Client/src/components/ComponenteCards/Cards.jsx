import Card from '../ComponenteCard/Card';
import style from "./Cards.module.css"

const Cards = ({characters,onClose}) => {
   return (
   <div className={style.cards}> 
      {/* recorremos el character que es un props pasado por app que contiene todos los card*/}
       {
       characters.map(({id,name,status,species,gender,origin,image}) =>{ 
         // debe devolver cada card con todos sus props
         return (
         <Card
            key = {id}
            id = {id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            status = {status}
            origin = {origin.name}
            onClose = {onClose}
         />)
       })
       }
   </div>
   );
}
export default Cards;