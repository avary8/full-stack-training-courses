import ColorBox from "./ColorBox";
import AddColor from "./AddColor";

const Content = ({ color, setColor, handleSubmit, hexValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <main>
        <ColorBox 
            color={color}
            hexValue={hexValue}
            isDarkText={isDarkText}
        />
        <AddColor 
            color={color}
            hexValue={hexValue}
            setColor={setColor}
            setHexValue={setHexValue}
            handleSubmit={handleSubmit}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
        />
    </main>
  )
}

export default Content