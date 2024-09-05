import { useState } from 'react'
import Compo from './Compo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Compo/>
    </>
  )
}

export default App
