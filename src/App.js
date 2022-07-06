import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Real time!</h1>
    <Link to="/login">
    <button>Login</button>
    </Link>
  
    </div>
  );
}

export default App;
