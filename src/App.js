import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header/header';
import Home from './Page/Home';

function App() {
  return (
    <div>
        <Header admin = "Home"/>
        <Home/>
    </div>

  );
}

export default App;
