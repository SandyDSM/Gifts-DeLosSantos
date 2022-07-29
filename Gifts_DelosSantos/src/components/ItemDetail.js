import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../sass/custom.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [AddCart, setAddCart] = useState(false);
  const onAdd = (param) =>{
    setAddCart(true)
    console.log(`Cantidad comprada: ${param}`);
}
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-5">
          <img src={product.img} class="img-fluid" alt={product.name}></img>
      </div>
      <div className="col-12 col-md-6 col-lg-7 mt-3 mt-md-0">
        <h1>{product.name}</h1>
        <hr></hr>
        <h2 className="text-primary display-5">{product.price}</h2>
        <p>{product.description}</p>
        <p className="lead">{product.stock} disponibles</p>
        <hr></hr>
        {
          AddCart
          ? <Link to='/cart' className="btn btn-info text-light">Finalizar compra</Link>
          : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        }
        <hr></hr>
      </div>
    </div>
  );
};

export default ItemDetail;