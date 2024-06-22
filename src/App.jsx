import gambar from "./assets/image.png";
import './App.css';

function App() {
  return (
    <>
      <div className="overlay">
        <h1>Shinobi</h1>
        <img src={gambar} alt="Gambar" className="animated-image" />
        <p>Shinobi adalah istilah dalam bahasa Jepang untuk prajurit bayangan atau ninja. Mereka dikenal karena kemampuan mereka dalam seni bela diri, kamuflase, dan pengintaian.</p>
      </div>
    </>
  );
}

export default App;
