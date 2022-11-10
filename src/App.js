import React from 'react'
import Post from './components/Post';
import Datos from './components/data.json'
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const[likesValue, setLikesValue] = React.useState(0);

  function handleClickTotal(){
    setLikesValue(likesValue + 1);
}

  return (
    <div className="App">
      <Estatus totalLikes={likesValue}/>
      <Posteos funcion={handleClickTotal} data={Datos}/>
      {/* <Post></Post> */}
    </div>
  );
}

export default App;
