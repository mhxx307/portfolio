export const INITIAL_STATE = { darkMode: false };

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export default ThemeReducer;
