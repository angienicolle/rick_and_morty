import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
   const {id,name,status,species,gender,origin,image,onClose} = props
   return (
      <div className={style.card}>
            <img src={image} alt=""/>
         <b></b>
         <div className={style.content}>
            <Link to={`/detail/${id}`}>
               <h2>Nombre: {name}</h2>
            </Link>
            <h2>Estatus: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>Origen: {origin}</h2>
            <button onClick={()=> onClose(id)}>x</button> 
         </div>
      </div>
   );
}
export default Card;