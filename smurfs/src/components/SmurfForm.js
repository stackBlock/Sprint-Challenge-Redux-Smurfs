import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            height: '',
            age: ''
        };
    }

    formSubmit = e => {
        e.preventDefault();
        const { name, age, height } = this.state;
        this.props.handleAddSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };



    render() {
        return (
            <form className="form" onSubmit={this.formSubmit}>
                <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    value={this.state.height}
                    name="height"
                    placeholder="Height"
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    value={this.state.age}
                    name="age"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <button type="submit">{this.props.title}</button>
            </form>
        );
    }
}

export default SmurfForm;