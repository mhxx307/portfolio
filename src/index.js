import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles';
import Provider from '~/store/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);
