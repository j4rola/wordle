import React from 'react'

function Buttons({store}) {
  return (
    <div className="flex justify-center">

       <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-3" onClick={store.handleBackSpace}>Delete</button>
       <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-3" onClick={store.submitGuess}>Enter</button>
       

    </div>
  )
}

export default Buttons