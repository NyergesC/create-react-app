import logo from './logo.svg';
import './App.css';

let clicks = 0;

const handleClick = () => {
  clicks += 1;
  if (clicks === 1) {
    document.getElementById('btn').innerText = 'You clicked me!';
  } else if (clicks === 2) {
    document.getElementById('btn').innerText = 'Stop clicking me!';
  } else if (clicks >= 3) {
    setTimeout(() => {
      document.getElementById('btn').innerText = 'Click me!'
    }, 3000);
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React
        </p>
        <button id="btn" onClick={handleClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;