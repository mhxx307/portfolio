import { useReducer } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './Context';
import ThemeReducer, { INITIAL_STATE } from './Reducer';

function Provider({ children }) {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
