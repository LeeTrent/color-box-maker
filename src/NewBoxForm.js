import React, { Component } from 'react';

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: "", width: "", color: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createBox(this.state);
        this.setState({height: "", width: "", color: ""});
    }
    render() {
        return (
            <div style={{padding:'10px'}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="height">Height:&nbsp;</label>
                        <input id="height" type="text" name="height" 
                            value={this.state.height} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="width">Width:&nbsp;</label>
                        <input id="width" type="text" name="width" 
                            value={this.state.width} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="color">Color:&nbsp;</label>
                        <input id="color" type="text" name="color" 
                            value={this.state.color} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Add New Box!</button>
                    </div>
                </form>
            </div>
        )
    }
}

