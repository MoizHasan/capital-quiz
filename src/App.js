import './App.css';
import CapitalQuiz from './component/CapitalQuiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CapitalQuiz countryData={{Germany: 'Berlin', Azerbaijan: 'Baku', Mongolia: 'Ulan Bataar'}} />
      </header>
    </div>
  );
}

export default App;
