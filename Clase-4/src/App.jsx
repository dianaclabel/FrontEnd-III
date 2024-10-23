import './App.css'
import Navbard from './components/NavBar'
import Title from "./components/Title"
import Button from './components/Button'
import Card from "./components/Card"
import Greeting from "./components/Greeting"

function App() {
  return(
    <>
      <Navbard/>
      <main>
        <Title/>
        <Button text={"text por medio de props"} numero={10}/>
        <Card>
          <h2>Titulo desde children</h2>
          <p>contenidso desde children</p>
        </Card>
        <Card/>
        <Greeting name={"Diana"}/>
      </main>
    </>
  )

  
}

export default App
