import './App.css'
import Header from './components/header/header'
import {Button} from "react-bootstrap"

function App() {

  return (
    <>
      <Header />
      <h1 className=''>LTIM Quick Migrate</h1>
      <button type='button' className='btn btn-primary'>Primary button</button>
      <Button variant='success'>Success</Button>
    </>
  )
}

export default App
