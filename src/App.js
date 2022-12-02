import { useContext } from 'react';

import Intro from '~/components/Intro';
import About from '~/components/About';
import Contact from '~/components/Contact';
import ProductList from '~/components/ProductList';
import Toggle from '~/components/Toggle';
import ThemeContext from '~/store/Context';

function App() {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <div
            className="App"
            style={{
                backgroundColor: darkMode ? '#222' : 'white',
                color: darkMode && 'white',
            }}
        >
            <Toggle />
            <Intro />
            <About />
            <ProductList />
            <Contact />
        </div>
    );
}

export default App;
