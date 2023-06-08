import logo from './logo.svg';
import logoPink from './logo-pink.svg';
import './App.css';

// Function to open an link
const AppLink = () => {
  const variable = "React";
  return(<a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn {variable} {9*2}+
</a>)
}

// Function to display logo
const Logo = ({svg}) => <img src={svg} className="App-logo" alt="logo" />

// Function App to display the page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo svg={logo}/>
        <Logo svg={logoPink}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <AppLink />
      </header>
    </div>
  );
}

export default App;
