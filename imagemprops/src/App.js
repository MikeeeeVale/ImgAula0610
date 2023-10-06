import NoticiaComponente from './components/NoticiaComponentes';
import Img from './img/images.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Imagem</h1>
     <NoticiaComponente
     titulo="5 Curiosidades sobre os gatos que você não sabia"
     imagem={Img}
     alt="Gato bocejando"
     descricao="Cada gato tem o nariz diferente um do outro, o nariz deles é como se fosse a impressão digital de nós humanos"
     categoria="Curiosidade"/>
    </div>
  );
}

export default App;
