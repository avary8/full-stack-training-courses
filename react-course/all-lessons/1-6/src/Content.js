import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Alice');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Alice', 'Bob', 'Martha'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClickAuto = () => {
        console.log('Automatically clicked');
    }

    const handleClickCount = () => {
        setCount(count + 1);
        setCount(count + 1);
        // wont add 2 since current value of state enters this function  
        // so both count in the above are the same value 
        console.log(count);
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e);
    }

    return (
    <main>
        <p onDoubleClick={handleClick3}>
            Hello {name}
        </p>

        <button onClick={handleClickAuto()}>Function Called Immediately</button>
        {/* this button ^ will not function the way you want it to. the function will be called immediately  */}

        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClickCount}>Count</button>
        <button onClick={() => handleClick2('Alice')}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
    )
}

export default Content