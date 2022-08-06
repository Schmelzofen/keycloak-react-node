import { useState } from 'react';

import './App.scss'

import Auth from './assets/components/auth/Auth';
import Main from './assets/components/main/Main'

function App() {
    const [token, setToken] = useState(null);
    return (
        <div className="App">
            {token ? (
                <Main />
            ) : (
                <Auth />
            )}
        </div>
    )
}

export default App
