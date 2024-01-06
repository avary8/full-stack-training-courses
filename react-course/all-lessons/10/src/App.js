import Content from './Content';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!color) return;
        setColor(color);
    }

    return (
        <div className="App">
        <Content 
            color={color}
            hexValue={hexValue}
            setColor={setColor}
            setHexValue={setHexValue}
            handleSubmit={handleSubmit}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
        />
        </div>
    );
}

export default App;
