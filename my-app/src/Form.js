import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",

    };
    onSubmit = () => {
        console.log(this.state);

    }
    render() {
        return (
            <form className="place">
                <input className="ah"
                placeholder="First name"
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value})}
                />
                <br/>
                 <input className="ah"
                placeholder="Last name"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value})}
                />
                <br/>
                 <input className="ah"
                placeholder="User name"
                value={this.state.userName}
                onChange={e => this.setState({ userName: e.target.value})}
                />
                <br/>
                 <input className="ah"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value})}
                />
                <br/>
                 <input className="ah"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value})}
                />
                <br/>
                <button className="ahh" onClick={() => this.onSubmit()}>Submit</button>
            </form>
        )
    }
}