import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCards from "./components/movieCard/MovieCards";
// import Logo from ""

const App = () => {

  const [search,setSearch] = useState("");
  const [movies,setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;



//Alimento com dados para não ficar nulo 
useEffect(()=>{
  searchMovies("Batman");
}, []);

//criando a conexão com a Api e tarazendo informações
const searchMovies= async (title)=> {
  const response = await fetch(`${apiUrl}&s=${title}`);
  const data = await response.json();
  
  //alimentando o movies 
  setMovies(data.Search);
};

//e = evento | ao clicar ou digitar aconetece algo 
const handleKeyPress = (e) => {
  e.key === "Enter" && searchMovies(search);
} 

  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="" />

      <div className="search">
        <input 
        onKeyDown={handleKeyPress}
        onChange={(e)=>setSearch(e.target.value)}
        type="text" 
        placeholder="Pesquise por filmes" />
        <img 
        onClick={() => searchMovies(search)}
        src={"https://placehold.co/20x20"} alt="" />
      </div>

      {movies?.length > 0 ? (
        <div className="container"> 
      {movies.map((movie,index)=>(
        <MovieCards key={index} {...movie}/>
      ))}
        </div>
      ) : (
        <h2 className="empty">😢 Filme não encontrado 😢</h2>
      )}
      <Footer
        devName={"Juju"}
        devLinks={"https://github.com/JulianaFulanetto"}
      />
    </div>
  );
}

export default App;
