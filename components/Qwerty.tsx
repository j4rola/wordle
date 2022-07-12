// @ts-nocheck
import { observer } from 'mobx-react-lite'


export default observer(function Qwerty({ store }) {

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
                <div onClick={getLetter()} className={`m-px flex h-10 w-10 items-center justify-center rounded-md ${bgColor} uppercase`}> 
                    {key}  
                </div>    
                )  
            })}

        </div>
        ))}
    </div>
  )
})



