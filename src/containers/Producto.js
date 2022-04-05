import React from 'react'
import iconItem from "../assets/statics/0.png"
import "../assets/css/Producto.css"

export default function Producto() {
  return (
    <div>
      <div className="detalle">
        <img src={iconItem} alt="" className="detalle-img" />
        <h1 className="home-item-titulo">Cerebro Loco</h1>
        <p className="home-item-medidas">Medidas: 20x10</p>
        <div className="home-item-actions">
          <h3 className="home-item-precio">$150</h3>
          <a href="/carrito"><button className="home-item-comprar">+</button></a>
        </div>
        <p>Esto es una descrip de producto :)</p>
      </div>

    </div>
  )
}
