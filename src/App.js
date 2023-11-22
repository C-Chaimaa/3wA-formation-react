import Counter from './components/Counter';
import SayHi from './components/SayHi';
import { useState } from 'react';
import './App.css';

function App() {
  // const [valeurInitial, FunctionPourModifier] = useState(NotreValeurInitial)
  const [count, setCount] = useState(0);

  // Utiliser la fonction pour récupérer une valeur depuis le composant enfant A NE PAS FAIRE 🚨
  /*   const yearLessRetirement = function (age) {
    console.log(age);
  };
 */

  return (
    <div>
      {/* 
      <SayHi
        name={'Michael'}
        age={40}
        job={'Developper'}
        yearLessRetirement={yearLessRetirement}></SayHi>
      <SayHi name={'John'} age={27} job={'CEO'}></SayHi>
     */}

      <div className='bg-red-400'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p style={{ fontSize: '30px', color: 'white' }}>{count}</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;

