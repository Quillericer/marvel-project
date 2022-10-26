
// batching test

import {useState} from 'react';

function TestComponent() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        setCount(c => c + 1);
        setFlag(f => !f);
    }
    console.log('render');

    return (
        <div>
            <button onClick={handleClick}></button>
            <h1 style={{color: flag ? "blue" : "black"}}>{count}</h1>
        </div>
    )
}

export default TestComponent;