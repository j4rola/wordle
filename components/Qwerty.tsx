// @ts-nocheck
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export default observer(function Qwerty({ store }) {

    useEffect(() => {
        
        window.addEventListener('click', store.handleClick)
        
        return () => { 
          window.removeEventListener('click', store.handleClick)
        }
      }, []) 

    const getLetter = () => {
        console.log('testing function')
    }
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'] 
  return (
    <div className="mt-4">
     {qwerty.map((row) => (   
        <div className="flex justify-center">
            {row.split('').map((key) => {
                const bgColor = store.exactGuesses.includes(key)
                ? 'bg-green-400'
                : store.inexactGuesses.includes(key)
                ? 'bg-yellow-400'
                : store.allGuesses.includes(key)
                ? 'bg-gray-400' 
                : 'bg-gray-200'
                return (
                <div id={key} className={`m-px flex items-center justify-center rounded-md ${bgColor} uppercase`} style={{height: 55, width: 45}}> 
                    {key}     
                </div>    
                )  
            })}

        </div>
        ))}
    </div>
  )
})



