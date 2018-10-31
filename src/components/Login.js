import React from 'react';

class Login extends React.Component {

    constructor(){
        super();

        this.state = {
            "username" : "juancito",
            "password" : "12345"
        }
    }

    handlerChange = (event) => {
        // TODO IMPLEMENTAR
    };

    login = () => {
        console.log(this.state);
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(result => result.json())
            .then( token => {
                console.log(token);
                localStorage.setItem('token', token);
                window.location.href = "/";
            })
    };

    render(){
        return (
            <div>
                Username: <input value={this.state.username}/>
                password: <input value={this.state.password}/>
                <button onClick={this.login}> Login </button>
            </div>
        )
    }
}

export default Login;