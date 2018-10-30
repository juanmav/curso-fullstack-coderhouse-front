import React, { Component } from 'react';
import './App.css';
import Lists from './components/Lists';
import Login from './components/Login';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <div>
                        <Route exact path={'/list'} component={Lists} />
                        <Route exact path={'/'} component={Login}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
