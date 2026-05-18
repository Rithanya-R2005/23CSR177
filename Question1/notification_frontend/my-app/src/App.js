import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Enter Name: </p>
      <input type="text" placeholder="Enter your name"></input>
      <p>Enter Email: </p>
      <input type="text" placeholder="Enter your email"></input>
      <p>Enter Passsword: </p>
      <input type="text" placeholder="Enter Password"></input><br></br>
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;