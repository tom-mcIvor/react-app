import logo from './logo.svg'
import './App.css'

function App() {

  const handleNameChange = () =>{
    const names = ['Bob', 'Kevin', 'Dave' ]
    const int = Math.floor(Math.random()* 3)
    return names[int]
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <pre>
          Text in a pre element is displayed in a fixed-width font, and it
          preserves both spaces and line breaks
        </pre>
        <br />

        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  )
}

export default App
