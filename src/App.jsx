import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola a todos" />
    <ItemDetailContainer/>
    </>
  );
}

export default App;


