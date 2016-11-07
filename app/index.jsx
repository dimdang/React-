
import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const App = () => (
    <MuiThemeProvider>
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Home/>
            </div>
        </div>
    </MuiThemeProvider>
);

render(<App/>, document.getElementById('app'));