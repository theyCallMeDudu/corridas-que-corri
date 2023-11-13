import './App.css';
import CorridaCard from './components/Corrida/Card/Card';

const App = () => {
  const corrida = {
    "id": 1,
    "title": "Circuito Correndo Pelo Rio - Praça Mauá",
    "year": "2023",
    "distance": 4,
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/corridas-que-corri-c9402.appspot.com/o/banner_corrida_1.png?alt=media&token=c4d33634-7997-43ae-9103-5dca4f0c0951"
  }

  return (
    <div
      className="App"
      style={{
        maxWidth: 300,
        margin: '40px auto'
      }}
    >
    <CorridaCard corrida={corrida} />
    </div>
  )
}

export default App;
