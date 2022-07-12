import React from 'react'

function Buttons({store}) {
  return (
    <div className="flex justify-center">
       <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={store.submitGuess}>Enter</button>
       <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={store.handleBackSpace}>Delete</button>

    </div>
  )
}

export default Buttons