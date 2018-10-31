import React, { Component } from 'react';
import './App.css';
import Lists from './components/Lists';
import Login from './components/Login';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component {
    render() {
        let token = localStorage.getItem('token');

        return (
            <div className="App">

                <BrowserRouter>
                    {
                        token ?
                            <div>
                                <Route exact path={'/'} component={Lists} />
                            </div>
                            :
                            <div>
                                <Login/>
                            </div>
                    }


                </BrowserRouter>

            </div>
        );
    }
}

export default App;
