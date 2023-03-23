// import { useState } from 'react';
import './App.css';
// import logo from "./logo.svg"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const Layout = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }

// function App() {
// const [view, setView] = useState("parrafo")
// // const [view, setView] = useState(null)

//   return (
//     <div className="App">
//       <div>
//         <button onClick={() => setView("parrafo")}>parrafo</button>
//         <button onClick={() => setView("img")}>imagen</button>
//       </div>
//       <Layout title="Titulo del componente">
//       </Layout>
//       <Layout>
//         {view === "parrafo" ? <p>Esto es un parrafo</p> : <img src={logo} alt="logo"/>}
//         {view === "parrafo" && <p>Esto es un parrafo</p>}
//         {view === "img" && <img src={logo} alt="logo"/>}
//       </Layout>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
