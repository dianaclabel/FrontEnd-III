import './App.css'
import { BoxItems } from "./components/BoxItems.jsx"
import { BoxItemsModo1 } from './components/BoxItemsModo1.jsx'
import { BoxItemsModoForm } from './components/BoxItemsModoForm.jsx'

function App() {

  return (
    <>
      <h1 className='titleMain'> Lista en React</h1>
      {/* <BoxItems /> */}
      <hr />
      <BoxItemsModo1 />
      <hr />
      <BoxItemsModoForm />
    </>
  )
}

export default App
