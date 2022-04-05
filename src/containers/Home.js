import React from 'react'
import Item from '../components/Item'
import { useEffect } from 'react'
import { useContext } from 'react'
import Contexto from '../context/Contexto'
import "../assets/css/Home.css"



export default function Home() {
  useEffect(
    () => {
      listameProductos()
    },[]
  )
  const  { listameProductos, productos } = useContext(Contexto)
  return (
  <>
  <div className="container">
    <div className="wraper">
      <div className="home">
    {
      productos.map((item) => (
        <Item {...item}key={item.id}></Item>
      ))
    }
    </div>
    </div>
  </div>
  </>

    )
}
