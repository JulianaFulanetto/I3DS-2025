import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
import Chat from "./pages/chat";
import Join from "./pages/Join";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isLight, setIsLight] = useState(true); // Estado para alternar entre os temas

  const toggleTheme = () => {
    setIsLight(!isLight); // Alterna entre os temas
  };

  return (
    <div
      id="App"
      className={`m-0 p-0 vh-100 d-flex flex-column justify-content-center align-items-center ${
        isLight ? "light" : "dark"
      }`}
    >
      {/* Botão para alternar entre os temas */}
      <button
        onClick={toggleTheme}
        className={`btn ${isLight ? "btn-dark" : "btn-light"} mb-3`}
      >
        {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>

      {/* Alterna entre as telas de Chat e Join */}
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join setSocket={setSocket} visibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;