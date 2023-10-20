import './App.css';
import NoticiaComponente from './components/Noticia';
import Imagem from './img/luz.jpg';

function App() {
  return (
    <div className="App">
    <h1>Essa é a sua Luz</h1>
    <NoticiaComponente
    titulo="O quanto você mantém a sua luz acessa para que os outros enxerguem"
    imagem={Imagem}
    descricao="descrição breve do assunto"
    categoria="Curiosidade"
    />
    </div>
  );
}

export default App;
