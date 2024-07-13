// import { useState } from "react";

// import { useEffect } from "react";
// import Home from "./pages/Home";
// import Produto from "./pages/Produto";
import Paths from "./Routes/Paths";
//import Card from "./components/Card";
//import CardDinamico from "./components/CardeDinamico";
//import FormaDeBolo from "./components/FormaDeBolo";
//import Header, { Teste } from "./components/Header" //multiplos componentes sendo importados, componente default e subcomponente 



// const App = () =>{
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   useEffect(() => {
//     console.log("useEffetc foi chamado")
//   })

//   useEffect(() => {
//     console.log("useEffect foi chamado somente uma vez")
//   }, []);

//   useEffect(() => {
//     console.log('Useefect ativado somente com por as dependencias')
//   }, [count])

//   return (
//       <><h1>Ola Mundo</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic nulla totam reiciendis. Voluptas fugit dolore quibusdam deleniti? Libero id mollitia doloribus sapiente officiis reiciendis, ex eius necessitatibus quae qui?</p>
//         <h1>Botao : {count}</h1>
//         <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
//         <h1>Botao 2 : {count2}</h1>
//         <button onClick={() => setCount2(count2 + 1)}>Clique Aqui</button>

//        </>
//   );
// }

// export default App;

const App = () => {
  return ( 
    <>
      <Paths/>
      
    </>
   );
}
 
export default App;