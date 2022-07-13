// @ts-nocheck


export default function Guess({ isGuessed, guess, word }) {

  const findDuplicates = x => x.filter((item, index) => x.indexOf(item) !== index) 
  
  return (
    <div className="mb-2 grid grid-cols-5 gap-2">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isGuessed 
          ? 'bg-gray-700' 
          : guess[i] === word[i]
          ? 'bg-green-500'
          : word.includes(guess[i]) && findDuplicates(guess).indexOf(guess[i]) === 0
          ? 'bg-yellow-400'
          : 'bg-gray-700'   

        return (
          <div
            className={`flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white rounded-md ${bgColor}` }
          >
            <h1 style={{fontSize: 32}}>{guess[i]}</h1> 
          </div>
        )
      })}
    </div>
  )
}
