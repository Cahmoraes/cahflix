import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain/index'
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
    </div>
  );
}

export default App;
