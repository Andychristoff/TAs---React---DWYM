
import './App.css'
import { UserProvider } from './UserContext'
import UserDisplay from './UserDisplay'


function App() {
  return (
    <>
      <UserProvider>
        <h1>React TA12</h1>
        <UserDisplay></UserDisplay>
      </UserProvider>
    </>
  )
}

export default App
