// @ts-nocheck
import { observer, useLocalObservable } from "mobx-react-lite"; 
import { useEffect } from 'react' 
import Qwerty from '../components/Qwerty'
import Guess from '../components/Guess'
import PuzzleStore from '../stores/PuzzleStore'


 export default observer(function Home () {

  const store = useLocalObservable(() => PuzzleStore)

  useEffect(() => {
    store.init()
    window.addEventListener('keyup', store.handleKeyup)

    return () => {
      window.removeEventListener('keyup', store.handleKeyup)
    }
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-600">
      <h1 className="text-6xl font-bold uppercase">Eldrow</h1><h2 className="mb-4">A practice arena for your favorite word puzzle</h2>
      {store.guesses.map((x, i) => (<Guess key={i} word={store.word} guess={store.guesses[i]} isGuessed={i < store.currentGuess} />))}
      {store.won && <h1>Nice Job</h1>}
      {store.lost && <h1>Better luck next time</h1>}
      {(store.won || store.lost) && (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={store.init}>Play Again</button>)}
      
      <Qwerty store={store}/>  
    
    </div>
  )
}) 



