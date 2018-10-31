import React from 'react';

class Lists extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lists : []
        }
    }

    componentDidMount(){
        let token = localStorage.getItem('token');
        console.log(token);
        fetch('http://localhost:3000/api/v1/lists/', {
            method: 'GET',
            headers: {
                token
            }
        })
            .then(response => response.json())
            .then( lists => {
                console.log(lists);
                this.setState({lists})
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                Lists
                {
                    this.state.lists.map( (l,index) => <div key={index}> {l._id}</div>)
                }
            </div>
        )

    }

}

export default Lists;