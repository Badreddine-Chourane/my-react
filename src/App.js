import logo from './logo.svg';
import './App.css';
import JeuDe from './component/JeuDE'
function App() {
  return (
    <div className="App">
      <JeuDe cache={2}/>
    </div>
  );
}

export default App;
