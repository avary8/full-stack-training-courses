import { useRef } from 'react';
import colorNames from 'colornames';

const AddColor = ({ color, setColor, handleSubmit, hexValue, setHexValue, isDarkText, setIsDarkText }) => {
    const inputRef = useRef();
  return (
    <form className='addColor'  onSubmit={handleSubmit}>
        <label htmlFor='addItem'>
            Add Color
        </label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add color name' 
                required
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
    </form>
  )
}

export default AddColor