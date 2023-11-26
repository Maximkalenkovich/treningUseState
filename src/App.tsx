import React, {useState, useEffect} from 'react';



function App() {
const [type, setType] =useState('users')

    useEffect(() => {
         console.log('render')
    }, []);
    return (
        <div >
            <h1>Ресурс:{type}</h1>
            <button onClick={ ()=>setType('users') }>Пользователи</button>
            <button onClick={()=> setType('posts')}>Посты</button>
            <button onClick={()=> setType('Todo')}>Todo</button>
        </div>
    );
}




export default App;
