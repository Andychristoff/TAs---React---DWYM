
import './App.css'
import { UserProvider } from './UserContext'  
import UserInput from './UserInput'


function App() {
  return (
    <>
      <UserProvider>

        <h1>React TA13</h1>
        <UserInput></UserInput>

      </UserProvider>
    </>
  )
}

export default App
