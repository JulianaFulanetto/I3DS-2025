import "./App.css";
import foto from "./img/gatoBlack.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };
  return (
    <div id="App" className={isLight && "light"}>
      <Perfil fotoPerfil={foto}> @Jujusac</Perfil>

      <Switch troca={troca} isLight={isLight} />

      <ul>
        <Links link={"https://github.com/JulianaFulanetto"}>GitHub</Links>
        <Links link={"https://www.instagram.com/jujuumf_/?hl=pt"}>
          Instagram
        </Links>
        <Links link={"https://br.pinterest.com/julianafulanetto/"}>
          Pinterest
        </Links>
        <Links link={"https://open.spotify.com/user/ax798ppcwgb5tt7kvexntcocm"}>
          Spotify
        </Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/JulianaFulanetto"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/jujuumf_/?hl=pt"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={"https://www.youtube.com/@julianafulanetto4288"}
          icon={"logo-youtube"}
        />
        <SocialLinks
          link={
            "https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.725790844702_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9100701"
          }
          icon={"logo-linkedin"}
        />
      </div>

      <Rodape>Juliana</Rodape>
    </div>
  );
};

export default App;
