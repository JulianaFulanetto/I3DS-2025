import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  // contador de produtos no carrinho
  const [contador,setContador] = useState(0); 

  //adiciona mais 1 item no carrinho (exemplo: ao adicionar um botão e puxar esta const, adicionará um item ao carrinho)
  const handleAddCarrinho = () => {
    setContador(contador + 1); // atualiza o contador
  }

  return (
    <>
      <Header contadorJogos={contador} />  {/* variavel interna do header  */}
      <Promotion onAddCarrinho={handleAddCarrinho}/> {/* adicionando o click para a promoção */}
    </>
  );
}

export default App;