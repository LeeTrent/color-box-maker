import React, { Component } from 'react';

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: "", width: "", color: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="height">Height:&nbsp;</label>
                        <input id="height" type="text" name="height" 
                            value={this.state.height} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

