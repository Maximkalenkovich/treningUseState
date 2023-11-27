import React, {useState, useEffect} from 'react';
import {json} from "stream/consumers";
import {Mystate} from "./exempels/mystate";
import State from "./exempels/state";


function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    // useEffect(() => {
    //      console.log('render')
    // }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);


    useEffect(() => {
        console.log('componentDidMount')
        window.addEventListener('mousemove', event => {
            setPos({
                x: event.clientX,
                y: event.clientY
            })
        })
    }, []);

    return (
        <div>
            <h1>Ресурс:{type}</h1>
            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('posts')}>Посты</button>
            <button onClick={() => setType('Todos')}>Todos</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <Mystate/>
            <State/>
        </div>


    );
}


export default App;
