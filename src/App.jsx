import './App.css'
import { TicTacToe, Practice, Three } from './component'
import { GameProvider } from './context'


function App() {

  return (
    <GameProvider>
      <TicTacToe />
    </GameProvider>
  )
}

export default App