import React, { useRef } from "react";
import io from "socket.io-client";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, insira um nome de usuário.");
      return;
    }

    //Criando a conexão com servidor socket
    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="text-center">
      <h1></h1>

      <div
        id="join-box"
        className="text-dark mt-4 rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-vindo ao devChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control "
            id="floatingInput"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
