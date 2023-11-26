import React, {useState} from 'react';

function computerInitialCounter() {
    console.log('Some calculation...')
    return Math.trunc(Math.random()*20)
}



function App() {
  const  [counter, setCounter] =    useState(() =>{
      return computerInitialCounter()
  })

  function increment() {
     setCounter(prevState => {
         return prevState + 1
     })
  // setCounter(prev => prev + 1)
  }

  function decrement() {
      setCounter(counter -1)
  }


    return (
        <div className="App">
          <h1> Счетчик : {counter}</h1>
            <button onClick={increment}>Добавить</button>
            <button onClick={decrement}>Убрать</button>
        </div>
    );
}

let a: string | null = 'dima';
a = null;
let name: string = 'it-kamasutra';
let isSamurai: boolean | null = true;
isSamurai = null;


// let names : Array<string> = ['dimych','maxim', 'valera'];
// let names2 : string[] = ['dimych','maxim', 'valera'];
// // alert (names[0].toUpperCase())
// names.forEach(n => {
//   alert(n.toUpperCase())
// })


let sex: 'male' | 'femaly';


type AddressType = {
    city: string | null
    country: string | null
}


let initialState = {
    name: null as string | null,
    age: null as number | null,
    isSamurai: null as boolean | null,
    addresses: [] as Array<AddressType>,
    counter: 0
}

export type initialStateType = typeof initialState;

let state: initialStateType = {
    name: 'fdue',
    age: 22,
    addresses: [{city: 'dff', country: 'edfrf'}],
    counter: 10,
    isSamurai: true
}




export default App;
