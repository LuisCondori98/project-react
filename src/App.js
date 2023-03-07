import './App.css';
// import Counter from './components/Counter/Counter';
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetinging={"Bienvenido a mi tienda online"}/>
      {/* <Counter title={"manzanas"} initial={0} stock={5}/>
      <Counter title={"naranjas"} initial={0} stock={6}/> */}
    </div>
  );
}

export default App;
