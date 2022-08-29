import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.


import Item from './Item';

export default function Listado() {

  let data = require('./data.json');

  const items = data.map((i) =>
    {
      return (<Item key={i.id} nombre={i.producto.nombre} descripcion={i.producto.descripcion} stock={i.stock}/>)
    })

  return (
    <div className='container'>
      
      {items}
    </div>
  )
}
